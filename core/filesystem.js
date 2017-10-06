module.exports = function (structure) {
    function exists(path) {
        return false;
    }

    function deletePath(path) {
        /* */
    }

    return {
        exists,
        delete: deletePath
    }
};
