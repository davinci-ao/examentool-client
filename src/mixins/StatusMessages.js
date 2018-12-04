export default({
    data () {
        return {
            statusMessages: [],
            statusMessagesStrings:
            {
                code_0: 'Geen verbinding met de server',
                code_404: 'Niet gevonden op server / fout bij communiceren met server',
                code_505: 'Interne server fout',
            }
        }
    },
    methods: {
        // * Add a status message to the page *
        // Input:
        //   1. Type of message.
        //      success, info, warning, error
        //   2. Status message
        //   3. Status code (optional)
        //
        // Return: nothing
        _addStatusMessage(type, message, code = undefined) {
            this.statusMessages.push({type: type, code: code, message: message});
            setTimeout(() => {
                this.statusMessages.shift();
            }, 3500);
        },
        // * Check if there is a user friendly text message available *
        // Input:
        //   1. Key (or code) of status message
        //   2. Message is case there is no text message available
        // Returns: The requested status message, otherwise just the given message
        _checkForStatusMessagesString(code, message) {
            if ('code_' + code in this.statusMessagesStrings) {
                return this.statusMessagesStrings['code_' + code];
            } else {
                return message;
            }
        }
    }
});
