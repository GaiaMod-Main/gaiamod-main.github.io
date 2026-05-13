(function(Scratch) {
  'use strict';

  class VideoRecorder {
    constructor() {
      this.recorder = null;
      this.chunks = [];
    }

    getInfo() {
      return {
        id: 'videorecorder',
        name: 'Video Recorder',
        blocks: [
          {
            opcode: 'startRecording',
            blockType: Scratch.BlockType.COMMAND,
            text: 'start recording video'
          },
          {
            opcode: 'stopRecording',
            blockType: Scratch.BlockType.COMMAND,
            text: 'stop recording and save'
          }
        ]
      };
    }

    startRecording() {
      if (this.recorder) return;

      const canvas = Scratch.vm.renderer.canvas;
      const videoStream = canvas.captureStream(60); // 30 FPS
      
      // Capture audio from the VM's audio engine context
      const audioContext = Scratch.vm.runtime.audioEngine.audioContext;
      const audioDestination = audioContext.createMediaStreamDestination();
      
      // Connect the master gain to the recorder destination
      Scratch.vm.runtime.audioEngine.inputNode.connect(audioDestination);
      
      const audioTrack = audioDestination.stream.getAudioTracks()[0];
      videoStream.addTrack(audioTrack);

      // Initialize MediaRecorder
      this.chunks = [];
      this.recorder = new MediaRecorder(videoStream, {
        mimeType: 'video/webm; codecs=vp8,opus'
      });

      this.recorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.chunks.push(e.data);
      };

      this.recorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recording.webm'; // WebM is natively recorded; convert to MP4 via tools
        a.click();
        URL.revokeObjectURL(url);
      };

      this.recorder.start();
    }

    stopRecording() {
      if (this.recorder && this.recorder.state !== 'inactive') {
        this.recorder.stop();
        this.recorder = null;
      }
    }
  }

  Scratch.extensions.register(new VideoRecorder());
})(Scratch);