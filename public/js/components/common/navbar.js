let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', function (UsersService, $state) {
        'use strict'
        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },

            $(function() {
                setInterval(function () {
                    var divUtc = $('#divUTC');
                    divUtc.text(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
                });




                disconnect() {
                    UsersService.disconnect().then(() => {
                        Materialize.toast('Disconnected', 4000, 'toast-warning')
                        this.user = null
                        $state.reload()
                    })
                }

            })
    }]
}
