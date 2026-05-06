const console = {
    output: [],
    getOutputAsString () {
        return this.output.join('\n')
    },
    log (string) {
        this.output.push(string)
    }
}

const devtools = {
    console
}

export default devtools;