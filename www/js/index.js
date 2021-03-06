function onDeviceConnected(data) {
    alert("onDeviceConnected: " + data);
}

function onSuccessScanPaymentCard(data) {
    alert("onSuccessScanPaymentCard: " + data);
}

function onBarcodeScanned(data) {
    alert("onBarcodeScanned: " + data.rawCodesArr);
}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        LineaProCDV.initDT(onDeviceConnected, onSuccessScanPaymentCard, onBarcodeScanned);
        app.receivedEvent('deviceready');
    },
        receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();