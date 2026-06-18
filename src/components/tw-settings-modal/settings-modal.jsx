import { defineMessages, FormattedMessage, intlShape, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import bindAll from 'lodash.bindall';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import FancyCheckbox from '../tw-fancy-checkbox/checkbox.jsx';
import Input from '../forms/input.jsx';
import BufferedInputHOC from '../forms/buffered-input-hoc.jsx';
import DocumentationLink from '../tw-documentation-link/documentation-link.jsx';
import styles from './settings-modal.css';
import VM from 'scratch-vm';

/* eslint-disable react/no-multi-comp */

const BufferedInput = BufferedInputHOC(Input);

const messages = defineMessages({
    title: {
        defaultMessage: 'Settings',
        description: 'Title of settings modal',
        id: 'pm.settingsModal.title'
    },
    help: {
        defaultMessage: 'Click for help',
        description: 'Hover text of help icon in settings',
        id: 'tw.settingsModal.help'
    }
});

const LearnMore = props => (
    <React.Fragment>
        {' '}
        <DocumentationLink {...props}>
            <FormattedMessage
                defaultMessage="Learn more."
                id="gui.alerts.cloudInfoLearnMore"
            />
        </DocumentationLink>
    </React.Fragment>
);

class UnwrappedSetting extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleClickHelp'
        ]);
        this.state = {
            helpVisible: false
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.active && !prevProps.active) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                helpVisible: true
            });
        }
    }
    handleClickHelp() {
        this.setState(prevState => ({
            helpVisible: !prevState.helpVisible
        }));
    }
    render() {
        return (
            <div
                className={classNames(styles.setting, {
                    [styles.active]: this.props.active
                })}
            >
                <div className={classNames(styles.label, {
                    [styles.labelUnsetHeight]: this.props.unsetHeight === true
                })}>
                    {this.props.primary}
                    <button
                        className={styles.helpIcon}
                        onClick={this.handleClickHelp}
                        title={this.props.intl.formatMessage(messages.help)}
                    />
                </div>
                {this.state.helpVisible && (
                    <div className={styles.detail}>
                        {this.props.help}
                        {this.props.slug && <LearnMore slug={this.props.slug} />}
                    </div>
                )}
                {this.props.secondary}
            </div>
        );
    }
}
UnwrappedSetting.propTypes = {
    intl: intlShape,
    active: PropTypes.bool,
    help: PropTypes.node,
    primary: PropTypes.node,
    secondary: PropTypes.node,
    slug: PropTypes.string
};
const Setting = injectIntl(UnwrappedSetting);

const BooleanSetting = ({ value, onChange, label, ...props }) => (
    <Setting
        {...props}
        active={value}
        primary={
            <label className={styles.label}>
                <FancyCheckbox
                    className={styles.checkbox}
                    checked={value}
                    onChange={onChange}
                />
                {label}
            </label>
        }
    />
);
BooleanSetting.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired
};

const HighQualityPen = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="High Quality Pen"
                description="High quality pen setting"
                id="tw.settingsModal.highQualityPen"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Allows pen projects to render at higher resolutions and disables some coordinate rounding in the editor. Not all projects benefit from this setting and it may impact performance."
                description="High quality pen setting help"
                id="tw.settingsModal.highQualityPenHelp"
            />
        }
        slug="high-quality-pen"
    />
);

const CustomFPS = props => (
    <BooleanSetting
        value={props.framerate !== 30}
        onChange={props.onChange}
        label={
            <FormattedMessage
                defaultMessage="60 FPS (Custom FPS)"
                description="FPS setting"
                id="tw.settingsModal.fps"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Runs scripts 60 times per second instead of 30. Most projects will not work properly with this enabled. You should try Interpolation with 60 FPS mode disabled if that is the case. {customFramerate}."
                description="FPS setting help"
                id="tw.settingsModal.fpsHelp"
                values={{
                    customFramerate: (
                        <a
                            onClick={props.onCustomizeFramerate}
                            tabIndex="0"
                        >
                            <FormattedMessage
                                defaultMessage="Click to use a framerate other than 30 or 60"
                                description="FPS settings help"
                                id="tw.settingsModal.fpsHelp.customFramerate"
                            />
                        </a>
                    )
                }}
            />
        }
        slug="custom-fps"
    />
);
CustomFPS.propTypes = {
    framerate: PropTypes.number,
    onChange: PropTypes.func,
    onCustomizeFramerate: PropTypes.func
};

const Interpolation = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Interpolation"
                description="Interpolation setting"
                id="tw.settingsModal.interpolation"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Makes projects appear smoother by interpolating sprite motion. Interpolation should not be used on 3D projects, raytracers, pen projects, and laggy projects as interpolation will make them run slower without making them appear smoother."
                description="Interpolation setting help"
                id="tw.settingsModal.interpolationHelp"
            />
        }
        slug="interpolation"
    />
);

const InfiniteClones = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Infinite Clones"
                description="Infinite Clones setting"
                id="tw.settingsModal.infiniteClones"
            />
        }
        help={
            <FormattedMessage
                defaultMessage="Disables Scratch's 300 clone limit."
                description="Infinite Clones setting help"
                id="tw.settingsModal.infiniteClonesHelp"
            />
        }
        slug="infinite-clones"
    />
);

const RemoveFencing = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Remove Fencing"
                description="Remove Fencing setting"
                id="tw.settingsModal.removeFencing"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Allows sprites to move offscreen, become as large or as small as they want, and makes touching blocks work offscreen."
                description="Remove Fencing setting help"
                id="tw.settingsModal.removeFencingHelp"
            />
        }
        slug="remove-fencing"
    />
);

const RemoveMiscLimits = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Remove Miscellaneous Limits"
                description="Remove Miscellaneous Limits setting"
                id="tw.settingsModal.removeMiscLimits"
            />
        }
        help={
            <FormattedMessage
                defaultMessage="Removes sound effect limits and pen size limits."
                description="Remove Miscellaneous Limits setting help"
                id="tw.settingsModal.removeMiscLimitsHelp"
            />
        }
        slug="remove-misc-limits"
    />
);

const EnableDangerousOptimizations = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Enable Dangerous Optimizations"
                description="Enable Dangerous Optimizations setting"
                id="pm.settingsModal.dangerousOptimizations"
            />
        }
        help={
            <FormattedMessage
                defaultMessage="Precomputes certain numbers & uses faster methods for certain operations, at the cost of losing tiny features like typing special text in certain number inputs. Not all projects will be compatible with this setting."
                description="Dangerous Optimizations setting help"
                id="pm.settingsModal.dangerousOptimizationsHelp"
            />
        }
        // slug="enable-dangerous-optimizations"
    />
);

const DisableBlur = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Disable Blur"
                description="Disable Blur setting"
                id="pm.settingsModal.disableBlur"
            />
        }
        help={
            <FormattedMessage
                defaultMessage="Disables background blur effects on modals and UI elements across the website. Good for older computers."
                description="Disable Blur setting help"
                id="pm.settingsModal.disableBlurHelp"
            />
        }
    />
);

const DisableOffscreenRendering = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Disable Off Screen Rendering"
                description="Disable Out of Bounds Rendering setting"
                id="pm.settingsModal.oobRendering"
            />
        }
        help={
            <FormattedMessage
                defaultMessage="When enabled all sprites that are off screen will not be rendered."
                description="Out of Bounds Rendering setting help"
                id="pm.settingsModal.oobRenderingHelp"
            />
        }
        // slug="out-of-bounds-rendering"
    />
);
const DisableDirectionClamping = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Disable Direction Clamping"
                description="Disable Direction Clamping setting"
                id="pm.settingsModal.noDirWrap"
            />
        }
        help={
            <FormattedMessage
                defaultMessage="When enabled, directions will not be clamped from -179 - 180"
                description="Disable Direction Clamping setting help"
                id="pm.settingsModal.noDirWrapHelp"
            />
        }
        // slug="out-of-bounds-rendering"
    />
);

const WarpTimer = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Warp Timer"
                description="Warp Timer setting"
                id="tw.settingsModal.warpTimer"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Makes scripts check if they are stuck in a long or infinite loop and run at a low framerate instead of getting stuck until the loop finishes. This fixes most crashes but has a significant performance impact, so it's only enabled by default in the editor."
                description="Warp Timer help"
                id="tw.settingsModal.warpTimerHelp"
            />
        }
        slug="warp-timer"
    />
);

const LoadUnsandboxedExtensions = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Allow all extensions to load unsandboxed"
                description="Unrestrict extensions setting"
                id="tw.settingsModal.loadUnsandboxedExtensions"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Disables extension security prompts and runs all extensions without the sandbox, including extension imports, URL parameter extensions, and project-loaded extensions. This is dangerous and should only be enabled if you fully trust all loaded extensions."
                description="Unrestrict extensions help"
                id="tw.settingsModal.loadUnsandboxedExtensionsHelp"
            />
        }
        slug="unrestrictSandbox"
    />
);

const CustomStageSize = ({
    customStageSizeEnabled,
    stageWidth,
    onStageWidthChange,
    stageHeight,
    onStageHeightChange,
    onStagePresetUsed
}) => (
    <Setting
        active={customStageSizeEnabled}
        unsetHeight={true}
        primary={(
            <div className={classNames(styles.label, styles.customStageSize)}>
                <FormattedMessage
                    defaultMessage="Stage Size:"
                    description="Stage Size option"
                    id="pm.settingsModal.stageSize"
                />
                <div>
                    <button
                        className={styles.customStageSizeButton}
                        data-selected={stageWidth === 360 && stageHeight === 360}
                        data-square={true}
                        onClick={() => onStagePresetUsed(2)}
                    >
                        1:1
                    </button>
                    <button
                        className={styles.customStageSizeButton}
                        data-selected={stageWidth === 480 && stageHeight === 360}
                        onClick={() => onStagePresetUsed(0)}
                    >
                        4:3
                    </button>
                    <button
                        className={styles.customStageSizeButton}
                        data-selected={stageWidth === 640 && stageHeight === 360}
                        data-widescreen={true}
                        onClick={() => onStagePresetUsed(1)}
                    >
                        16:9
                    </button>
                    <button
                        className={styles.customStageSizeButton}
                        data-selected={stageWidth === 360 && stageHeight === 640}
                        data-mobile={true}
                        onClick={() => onStagePresetUsed(3)}
                    >
                        9:16
                    </button>
                    <button
                        className={styles.customStageSizeButton}
                        data-selected={stageWidth === 360 && stageHeight === 720}
                        data-mobile-alt={true}
                        onClick={() => onStagePresetUsed(4)}
                    >
                        9:18
                    </button>
                    <button
                        className={styles.customStageSizeButton}
                        data-selected={stageWidth === 360 && stageHeight === 450}
                        data-mobile-small={true}
                        onClick={() => onStagePresetUsed(5)}
                    >
                        4:5
                    </button>
                </div>
                <div className={styles.customStageSizeContainer}>
                    <FormattedMessage
                        defaultMessage="Custom Stage Size:"
                        description="Custom Stage Size option"
                        id="tw.settingsModal.customStageSize"
                    />
                    <BufferedInput
                        value={stageWidth}
                        onSubmit={onStageWidthChange}
                        className={styles.customStageSizeInput}
                        type="number"
                        min="0"
                        max="1024"
                        step="1"
                    />
                    <span>{'×'}</span>
                    <BufferedInput
                        value={stageHeight}
                        onSubmit={onStageHeightChange}
                        className={styles.customStageSizeInput}
                        type="number"
                        min="0"
                        max="1024"
                        step="1"
                    />
                </div>
            </div>
        )}
        secondary={
            (stageWidth >= 1000 || stageHeight >= 1000) && (
                <div className={styles.warning}>
                    <FormattedMessage
                        // eslint-disable-next-line max-len
                        defaultMessage="Using a custom stage size this large is not recommended! Instead, use a lower size with the same aspect ratio and let fullscreen mode upscale it to match the user's display."
                        description="Warning about using stages that are too large in settings modal"
                        id="tw.settingsModal.largeStageWarning"
                    />
                    <LearnMore slug="custom-stage-size" />
                </div>
            )
        }
        help={(
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Changes the size of the Scratch stage from 480x360 to something else. Try 640x360 to make the stage widescreen. Very few projects will handle this properly."
                description="Custom Stage Size option"
                id="tw.settingsModal.customStageSizeHelp"
            />
        )}
        slug="custom-stage-size"
    />
);
CustomStageSize.propTypes = {
    customStageSizeEnabled: PropTypes.bool,
    stageWidth: PropTypes.number,
    onStageWidthChange: PropTypes.func,
    stageHeight: PropTypes.number,
    onStageHeightChange: PropTypes.func,
    onStagePresetUsed: PropTypes.func
};

const StoreProjectOptions = ({ onStoreProjectOptions }) => (
    <div className={styles.setting}>
        <div>
            <button
                onClick={onStoreProjectOptions}
                className={styles.button}
            >
                <FormattedMessage
                    defaultMessage="Store settings in project"
                    description="Button in settings modal"
                    id="tw.settingsModal.storeProjectOptions"
                />
            </button>
            <p>
                <FormattedMessage
                    // eslint-disable-next-line max-len
                    defaultMessage="Stores the selected settings in the project so they will be automatically applied when GaiaMod loads this project. Warp timer will not be saved."
                    description="Help text for the store settings in project button"
                    id="tw.settingsModal.storeProjectOptionsHelp"
                />
            </p>
        </div>
    </div>
);
StoreProjectOptions.propTypes = {
    onStoreProjectOptions: PropTypes.func
};

const Header = props => (
    <div className={styles.header}>
        {props.children}
        <div className={styles.divider} />
    </div>
);
Header.propTypes = {
    children: PropTypes.node
};
const ProjectSizeTracker = ({ vm }) => {
    const [projectSize, setProjectSize] = React.useState(0);

    React.useEffect(() => {
        const calculateSize = () => {
    
    if (!vm || !vm.runtime) {
        return 0;
    }
            if (!vm || !vm.runtime) return 0;

            let totalSize = 0;
            const processedAssets = new Set();

            const getAssetSize = (asset) => {
                if (!asset) return 0;
                if (asset.size) return asset.size;
                if (asset.data) return asset.data.length || asset.data.byteLength || 0;
                return 0;
            };

            if (vm.runtime.targets) {
                vm.runtime.targets.forEach(target => {
                    if (target.sprite && target.sprite.costumes) {
                        target.sprite.costumes.forEach(costume => {
                            const assetId = costume.assetId || costume.md5;
                            if (assetId && !processedAssets.has(assetId)) {
                                processedAssets.add(assetId);
                                totalSize += getAssetSize(costume.asset);
                            }
                        });
                    }

                    if (target.sprite && target.sprite.sounds) {
                        target.sprite.sounds.forEach(sound => {
                            const assetId = sound.assetId || sound.md5;
                            if (assetId && !processedAssets.has(assetId)) {
                                processedAssets.add(assetId);
                                totalSize += getAssetSize(sound.asset);
                            }
                        });
                    }
                });
            }

            const scriptEstimate = vm.runtime.targets ? vm.runtime.targets.length * 5000 : 10000;
            totalSize += scriptEstimate;

            return totalSize;
        };

        const updateSize = () => {
            const size = calculateSize();
            setProjectSize(size);
        };

        updateSize();
        const interval = setInterval(updateSize, 2000);

        return () => clearInterval(interval);
    }, [vm]);

    const formatBytes = (bytes) => {
        if (bytes === 0) return '0 B';
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const UPLOAD_LIMIT = 64 * 1024 * 1024;
    const percentage = Math.min((projectSize / UPLOAD_LIMIT) * 100, 100);
    const isNearLimit = percentage > 80 && percentage <= 100;
    const isOverLimit = projectSize > UPLOAD_LIMIT;

    let barClass = styles.projectSizeBarSafe;
    if (isOverLimit) {
        barClass = styles.projectSizeBarDanger;
    } else if (isNearLimit) {
        barClass = styles.projectSizeBarWarning;
    }

    return (
        <div className={styles.projectSizeContainer}>
            <div className={styles.projectSizeHeader}>
                <span>
                    <FormattedMessage
                        defaultMessage="Project Size"
                        description="Project size tracker header"
                        id="pm.settingsModal.projectSize"
                    />
                </span>
                <span className={styles.projectSizeValue}>
                    {formatBytes(projectSize)}
                </span>
            </div>

            <div className={styles.projectSizeBarContainer}>
                <div
                    className={classNames(styles.projectSizeBar, barClass)}
                    style={{ width: `${percentage}%` }}
                >
                    {percentage > 15 && `${percentage.toFixed(1)}%`}
                </div>
            </div>
                <FormattedMessage
                    defaultMessage="This is a tracker to make sure that your project stays under the upload limit for GaiaMod Home."
                    description="Project size tracker header"
                    id="pm.settingsModal.sizedisc"
                />
            <div className={styles.projectSizeInfo}>
                <FormattedMessage
                    defaultMessage="Upload limit for GaiaMod: {limit}"
                    description="Upload limit info"
                    id="pm.settingsModal.uploadLimit"
                    values={{
                        limit: formatBytes(UPLOAD_LIMIT)
                    }}
                />
            </div>

            {isOverLimit && (
                <div className={styles.projectSizeDangerText}>
                    <FormattedMessage
                        defaultMessage=" Your project is over the 64MB upload limit. You won't be able to upload this project to the GaiaMod website until you reduce its size by removing unused costumes or sounds."
                        description="Over limit warning"
                        id="pm.settingsModal.overLimitWarning"
                    />
                </div>
            )}

            {isNearLimit && !isOverLimit && (
                <div className={styles.projectSizeWarningText}>
                    <FormattedMessage
                        defaultMessage=" Your project is approaching the 64MB upload limit. Consider removing unused assets to stay under the limit."
                        description="Near limit warning"
                        id="pm.settingsModal.nearLimitWarning"
                    />
                </div>
            )}
        </div>
    );
};

ProjectSizeTracker.propTypes = {
    vm: PropTypes.instanceOf(VM).isRequired
};
const SettingsModalComponent = props => {
    const [activeTab, setActiveTab] = React.useState('render');

    return (
        <Modal
            className={styles.modalContent}
            onRequestClose={(...args) => {
                if (!props.isEmbedded) {
                    props.onStoreProjectOptions();
                }
                props.onClose(...args)
            }}
            contentLabel={props.intl.formatMessage(messages.title)}
            id="settingsModal"
        >
            <Box className={styles.body}>
                <div className={styles.tabContainer}>
                    <div className={styles.sidebar}>
                        <button
                            className={classNames(styles.tabButton, {
                                [styles.tabButtonActive]: activeTab === 'render'
                            })}
                            onClick={() => setActiveTab('render')}
                        >
                            <FormattedMessage
                                defaultMessage="Render"
                                description="Settings tab"
                                id="pm.settingsModal.render"
                            />
                        </button>
                        <button
                            className={classNames(styles.tabButton, {
                                [styles.tabButtonActive]: activeTab === 'limits'
                            })}
                            onClick={() => setActiveTab('limits')}
                        >
                            <FormattedMessage
                                defaultMessage="Limits"
                                description="Settings tab"
                                id="pm.settingsModal.limits"
                            />
                        </button>
                        <button
                            className={classNames(styles.tabButton, {
                                [styles.tabButtonActive]: activeTab === 'optimization'
                            })}
                            onClick={() => setActiveTab('optimization')}
                        >
                            <FormattedMessage
                                defaultMessage="Optimization"
                                description="Settings tab"
                                id="pm.settingsModal.optimization"
                            />
                        </button>
                        <button
                            className={classNames(styles.tabButton, {
                                [styles.tabButtonActive]: activeTab === 'projectInfo'
                            })}
                            onClick={() => setActiveTab('projectInfo')}
                        >
                            <FormattedMessage
                                defaultMessage="Project Information"
                                description="Settings tab"
                                id="pm.settingsModal.projectInfo"
                            />
                        </button>
                        <button
                            className={classNames(styles.tabButton, {
                                [styles.tabButtonActive]: activeTab === 'help'
                            })}
                            onClick={() => setActiveTab('help')}
                        >
                            <FormattedMessage
                                defaultMessage="Help"
                                description="Settings tab"
                                id="pm.settingsModal.help"
                            />
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                    {activeTab === 'render' && (
                        <div>
                            {!props.isEmbedded && (
                                <CustomStageSize
                                    {...props}
                                />
                            )}
                            <CustomFPS
                                framerate={props.framerate}
                                onChange={props.onFramerateChange}
                                onCustomizeFramerate={props.onCustomizeFramerate}
                            />
                            <HighQualityPen
                                value={props.highQualityPen}
                                onChange={props.onHighQualityPenChange}
                            />
                            <DisableBlur
                                value={props.disableBlur}
                                onChange={props.onDisableBlurChange}
                            />
                        </div>
                    )}

                        {activeTab === 'limits' && (
                            <div>
                                <InfiniteClones
                                    value={props.infiniteClones}
                                    onChange={props.onInfiniteClonesChange}
                                />
                                <RemoveFencing
                                    value={props.removeFencing}
                                    onChange={props.onRemoveFencingChange}
                                />
                                <RemoveMiscLimits
                                    value={props.removeLimits}
                                    onChange={props.onRemoveLimitsChange}
                                />
                                <WarpTimer
                                    value={props.warpTimer}
                                    onChange={props.onWarpTimerChange}
                                />
								<LoadUnsandboxedExtensions
                value={props.loadUnsandboxedExtensions}
                onChange={props.onLoadUnsandboxedExtensions}
            />
                            </div>
                        )}

                        {activeTab === 'optimization' && (
                            <div>
                                <DisableOffscreenRendering
                                    value={props.disableOffscreenRendering}
                                    onChange={props.onDisableOffscreenRenderingChange}
                                />
                                <EnableDangerousOptimizations
                                    value={props.dangerousOptimizations}
                                    onChange={props.onEnableDangerousOptimizationsChange}
                                />
                                <DisableDirectionClamping
                                    value={props.disableDirectionClamping}
                                    onChange={props.onDisableDirectionClamping}
                                />
                                <Interpolation
                                    value={props.interpolation}
                                    onChange={props.onInterpolationChange}
                                />
                            </div>
                        )}

                        {activeTab === 'projectInfo' && (
                            <div>
                                <ProjectSizeTracker vm={props.vm} />
                            </div>
                        )}
                        {activeTab === 'help' && (
                            <div>
                                <h1>Help about new GaiaMod Editor Features:</h1>
                                <h3>Screenshot Tool:</h3>
                                <p>
                                    The screenshot tool allows you to capture images of your project at any time. You can access it from the toolbar or by clicking the button in the header of the project canavas. Very simple to use.
                                </p>
                                <p>If you would like other help things being added, please report it to our discord or github! Hope this helps you figure out any of our new features!!</p>
                            </div>
                        )}
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

SettingsModalComponent.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func,
    isEmbedded: PropTypes.bool,
    vm: PropTypes.instanceOf(VM), 
    framerate: PropTypes.number,
    onFramerateChange: PropTypes.func,
    onCustomizeFramerate: PropTypes.func,
    highQualityPen: PropTypes.bool,
    onHighQualityPenChange: PropTypes.func,
    interpolation: PropTypes.bool,
    onInterpolationChange: PropTypes.func,
    infiniteClones: PropTypes.bool,
    onInfiniteClonesChange: PropTypes.func,
    removeFencing: PropTypes.bool,
    onRemoveFencingChange: PropTypes.func,
    removeLimits: PropTypes.bool,
    onRemoveLimitsChange: PropTypes.func,
    warpTimer: PropTypes.bool,
    onWarpTimerChange: PropTypes.func,
    disableCompiler: PropTypes.bool,
    dangerousOptimizations: PropTypes.bool,
    onDisableCompilerChange: PropTypes.func,
    onEnableDangerousOptimizationsChange: PropTypes.func,
    disableOffscreenRendering: PropTypes.bool,
    onDisableOffscreenRenderingChange: PropTypes.func,
	loadUnsandboxedExtensions: PropTypes.func,
    onLoadUnsandboxedExtensions: PropTypes.func,
    disableBlur: PropTypes.bool,
    onDisableBlurChange: PropTypes.func
};

export default injectIntl(SettingsModalComponent);