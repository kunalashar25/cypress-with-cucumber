class InvalidArgumentError extends Error {
    /**
     * @description To throw error when unsupported or invalid data is sent in an argument
     * @param {string} message
     */
    constructor(message) {
        super(message);
        this.name = 'InvalidArgumentError';
    }
}

export default InvalidArgumentError