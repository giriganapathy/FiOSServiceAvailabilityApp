var fiosZipCodes = ["19096", "19107", "10032","18901","11590","10019","08104","11554","02026","19801","21213","22205","08103"];
module.exports.checkService = function (req, res, data) {
    try {
        if (!data) { throw new Error("Invalid Zip Code!"); }
        var zipCode = "";
        for (var idx = 0; idx < fiosZipCodes.length; idx++) {
            zipCode = fiosZipCodes[idx];
            if (data === zipCode) {
                return true;
            }
        }

    }
    catch (e) {
        throw e;
    }
    return false;
};