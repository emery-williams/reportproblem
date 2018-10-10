/***************************************************************/

// Report a Problem

app.controller('ActionContainerAfterController', [function () {
    var vm = this;

    vm.getPermalink = getPermalink;

    function getPermalink() {
        var permalink = encodeURIComponent(window.location.href);
        var formField = 'INSERT PREFILLED GOOGLE FORM LINK HERE';
        formField += permalink;
        return formField;
    }
}]);

app.component('prmActionContainerAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'ActionContainerAfterController',
    template: '<div id="report-problem" layout="row" layout-align="center center">
    <a id="problemLink" target="_blank" href="{{$ctrl.getPermalink()}}" title="Report a problem">
    <img src="INSERT LINK TO IMG FILE HERE">&nbsp;&nbsp;Report a problem with this item</a></div>'
});

/***************************************************************/
