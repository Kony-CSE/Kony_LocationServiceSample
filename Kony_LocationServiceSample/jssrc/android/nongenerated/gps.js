function successGpscallback(position) {
    try {
        kony.print("successGpscallback function");
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        //lat="38.89870539307594";
        //lng="-77.0365297794342";
        kony.print("lat:" + lat);
        kony.print("lng:" + lng);
        if ((lat != null && lat != "") && (lng != null && lng != "")) {
            kony.print(lat + ": :" + lng);
            location = [lat, lng];
            iniaiteBackService(lat, lng);
        } else {
            iniaiteBackService("0", "0");
        }
    } catch (e) {
        kony.print("Exception in successGpscallback", e);
    }
}
/**
 * Function which is executed when an error is encountered while fetching the location of the device
 * 
 * @function errorcallback
 * 
 * @param	positionerror	Object		Contains the error code and error message
 *
 * return void
 */
function errorcallback(positionerror) {
    var errorMesg = "Error code: " + positionerror.code;
    errorMesg = errorMesg + " message: " + positionerror.message
    alert(errorMesg);
    //displayPopup(""+positionerror.message,"Unable to get the Location.", "dismiss");
}
var positionoptions = {
    timeout: 15000
};
/**
 * Function which fetches the current location coordinates of the device
 * 
 * @function findGpsData
 * 
 * @callback	successGpscallback		Callback function which is called on succesfully getting the coordinates
 * @callback	errorcallback			Callback function which is called on failure getting the coordinates
 * 
 * return void
 */
function findGpsData() {
    kony.print("findGpsData fun");
    kony.location.getCurrentPosition(successGpscallback, errorcallback, positionoptions);
}