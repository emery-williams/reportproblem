/***************************************************************/

// Report a Problem

app.controller('ActionContainerAfterController', [function () {
    var vm = this;

    vm.getPermalink = getPermalink;

    function getPermalink() {
        var permalink = encodeURIComponent(window.location.href);
        var formField = 'https://docs.google.com/forms/d/e/1FAIpQLSdlaeHvUuzCeIVp3gC2fKIpcMy7SprQi07Uan9ppyZnWuM3TA/viewform?usp=pp_url&entry.867749837=';
        formField += permalink;
        return formField;
    }
}]);

app.component('prmActionContainerAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'ActionContainerAfterController',
    template: '<div id="report-problem" layout="row" layout-align="center center"><a id="problemLink" target="_blank" href="{{$ctrl.getPermalink()}}" title="Report a problem"><img src="https://librarytools.williams.edu/assets/images/warning.png">&nbsp;&nbsp;Report a problem with this item</a></div>'
});

/***************************************************************/