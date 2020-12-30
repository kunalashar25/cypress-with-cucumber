class InvalidArgumentError extends Error {
    /**
     * @param {string} message
     */
    constructor(message) {
        super(message);
        this.name = 'InvalidArgumentError';
    }
}

export default InvalidArgumentError