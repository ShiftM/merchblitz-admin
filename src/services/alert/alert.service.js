
import Swal from 'sweetalert2';
export default class AlertService {
    save() {
        $.notify({
            icon: "done",
            message: "<b>Success</b> <br> Record Successfully Saved."
        }, {
            type: 'success',
            timer: 1000,
            placement: {
                from: 'top',
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown'
            },
        });
    }

    update() {
        $.notify({
            icon: "done",
            message: "<b>Success</b> <br> Record Successfully Updated."
        }, {
            type: 'success',
            timer: 1000,
            placement: {
                from: 'top',
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown'
            },
        });
    }

    submitWithMessage(message) {
        $.notify({
            icon: "done",
            message: "<b>Success</b> <br> " + message
        }, {
            type: 'success',
            timer: 1000,
            placement: {
                from: 'top',
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown'
            },
        });
    }

    deleted() {
        $.notify({
            icon: "delete",
            message: "<b>Success</b> <br> Record Successfully Deleted."
        }, {
            type: 'success',
            timer: 1000,
            placement: {
                from: 'top',
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown'
            },
        });
    }

    errorWithMessage(message) {
        $.notify({
            icon: "clear",
            message: "<b>Error</b> <br> " + message
        }, {
            type: 'danger',
            timer: 1000,
            placement: {
                from: 'top',
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown'
            },
        });
    }

    uploading() {
        $.notify({
            icon: "nc-icon nc-cloud-upload-94",
            message: "<b>Loading..</b> <br> Please Wait."
        }, {
            type: 'primary',
            allow_dismiss: false,
            timer: 800000,
            onClosed: null,
            placement: {
                from: 'top',
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown'
            },
        });
    }

    uploadSuccess() {
        $.notifyClose();
        setTimeout(function () {
            $.notify({
                icon: "nc-icon nc-check-2",
                message: "<b>Success</b> <br> File Successfully Uploaded."
            }, {
                type: 'success',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'right'
                },
                animate: {
                    enter: 'animated fadeInDown'
                },
            });
        }, 800);
    }



    loading() {
        Swal.fire({
            imageUrl: '/img/loading.gif',
            title: 'Loading...',
            text: 'Please wait',
            showConfirmButton: false,
            showCancelButton: false,
            imageWidth: 150,
            imageHeight: 150,
            allowOutsideClick: false
        });
    }




    successWithMessage(title, body) {

        Swal.fire({
            title: title,
            text: body,
            icon: 'success',
            // imageUrl: url **to override icon//
            showCancelButton: false,
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.value) {
            }
        });

    }


    withConfirmation(cb, message) {


        Swal.fire({
            title: 'Are you sure?',
            text: message,
            icon: 'warning',
            // imageUrl: url **to override icon//
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                cb();
            }
        });

    }

    failWithMessage(title, body) {

        Swal.fire({
            title: title,
            text: body,
            icon: 'error',
            // imageUrl: url **to override icon//
            showCancelButton: false,
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.value) {
            }
        });

    }

    close() {
        Swal.close();
    }

}
export const alertService = new AlertService();
