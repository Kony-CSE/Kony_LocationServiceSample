//Form JS File
function frm1_button685080275123_onClick_seq0(eventobject) {
    function successcallback(position) {
        var geoPosition = "Latitude: " + position.coords.latitude;
        geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
        geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
        geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
        geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;
        geoPosition = geoPosition + " Heading: " + position.coords.heading;
        geoPosition = geoPosition + " Speed: " + position.coords.speed;
        geoPosition = geoPosition + " Timestamp: " + position.timestamp;
        alert(geoPosition);
        frm1.labellat.text = "Latitude : " + position.coords.latitude;
        frm1.labellon.text = "Longitude : " + position.coords.longitude;
    }

    function errorcallback(positionerror) {
        var errorMesg = "Error code: " + positionerror.code;
        //errorMesg = errorMesg + " message: " + positionerror.message
        if (positionerror.code == 2) {
            errorMesg = errorMesg + "\n" + positionerror.message + "\n Please turn on the location services.";
            frm1.labellat.text = "Latitude : ";
            frm1.labellon.text = "Longitude : ";
            alert(errorMesg);
        } else if (positionerror.code == 3) {
            errorMesg = errorMesg + "\n" + positionerror.message + "\n we are unable to get the location values.";
            frm1.labellat.text = "Latitude : ";
            frm1.labellon.text = "Longitude : ";
            alert(errorMesg);
        }
    }
    var positionoptions = {
        timeout: 25000,
        enableHighAccuracy: false,
        maximumAge: 30000
    }; // 5 secs
    kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
};

function addWidgetsfrm1() {
    var button685080275123 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button685080275123",
        "isVisible": true,
        "onClick": frm1_button685080275123_onClick_seq0,
        "skin": "btnNormal",
        "text": "Get Gps Coordinates"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var labellat = new kony.ui.Label({
        "id": "labellat",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Latitude :"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var labellon = new kony.ui.Label({
        "id": "labellon",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Longitude :"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frm1.add(
    button685080275123, labellat, labellon);
};

function frm1Globals() {
    var MenuId = [];
    frm1 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrm1,
        "enabledForIdleTimeout": false,
        "id": "frm1",
        "needAppMenu": true,
        "skin": "frm",
        "title": null
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
};