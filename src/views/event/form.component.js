import Vue from "vue";
import CKEditor from "ckeditor4-vue";
import EventService from "../../services/event/event.service";

const event = new EventService();
import AlertService from "../../services/alert/alert.service";

const alert = new AlertService();
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.use(CKEditor);
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

export default {
    data: () => {
        return {
        demo: [
        {
            options: {
            format: 'h:mm a',
            formatted: 'h:mm a',
            onlyTime: true,
            color: 'firebrick',
            minuteInterval: '15',
            label: 'Select time',
            id: 'TimePicker',
            noLabel: true,
            onlyDate: true,
            dateFormat: 'YYYY-MM-DD',
            dateFormatted: 'YYYY-MM-DD',
            title: 'Select date'
            }
            // options: {
            //   format: 'YYYY-MM-DD h:mm a',
            //   minuteInterval: '15',
            //   id: 'DateTimePicker',
            // }
        }
        ],
        active_id: "",
        data: {
            fullPath: "",
            startDate: moment(new Date()).format("YYYY-MM-DD"),
            endDate: moment(new Date()).format("YYYY-MM-DD"),
            organizer: {
            name: '',
            imageUrl: ''
            },
            segments: [
            {
                title: "",
                segmentExhibitors: [
                {
                    description: ""
                }
                ],
                locationImages: [{
                path: '',
                fileName: ''
                }]

            }
            ],
            // event schedules
            eventDays: [
            {
                date: moment(new Date()).format("YYYY-MM-DD"),
                schedules: [
                {
                    title: "",
                    time: "12:00"
                }
                ]
            }
            ],
            //end of event schedules
            eventImages: []
        },
        errors: {},
        };
    },
    methods: {
        convertIsoToDateTime() {
        this.data.startDate.replace('T', '');
        this.data.startDate.replace('Z', '');
        this.data.endDate.replace('T', '');
        this.data.endDate.replace('Z', '');
        //equal startDate and endDate to startTime and endTime
        this.data.startTime = this.data.startDate;
        this.data.endTime = this.data.endDate;

        //loop through arrays that has invalid format
        this.data['eventDays'].forEach((value) => {
            // value.date = moment(value.date).format("YYYY-MM-DD HH:mm:ss");
            value.date.replace('T', '');
            value.date.replace('Z', '');
            value['schedules'].forEach((sched) => {
            var date = new Date(sched['time']);
            sched['time'] = date.toISOString().substring(11, 19)
            });
        });
        },
        cancel() {
        location.href = '/events';
        },
        saveEvent() {
        //show swal loader
        this.$swal({
            title: "Loading...",
            text: "Please wait while saving the data.",
            icon: "/img/loader.gif",
            button: false,
            closeOnClickOutside: false
        });

        //equal startDate and endDate to startTime and endTime
        // this.data.startDate = moment(this.data.startDate).format("YYYY-MM-DD HH:mm:ss");
        // this.data.endDate = moment(this.data.endDate).format("YYYY-MM-DD HH:mm:ss");

        this.data.startTime = this.data.startDate;
        this.data.endTime = this.data.endDate;

        

        //checker if update or store
        if (this.$route.params.id) {
            this.updateEvent();
        } else {
            this.storeEvent();
        }

        },
        storeEvent() {
        //convert all iso format to datetime
        return event.store(this.data).then(
            success => {
            this.$swal(
                {
                title: "Success!",
                icon: "success",
                text: "Successfully Saved!",
                type: "success",
                allowOutsideClick: false
                })
                .then(response => {
                location.reload();
                });

            },
            fail => {
            this.errors = fail.errors;
            this.$swal("Error!", "Please fill up all required fields.", "error");
            }
        );
        },
        updateEvent() {

        // this.convertTimeToDateTime(this.data.eventDays);
        return event.update(this.data, this.$route.params.id).then(success => {
            this.$swal(
                {
                title: "Success!",
                icon: "success",
                text: "Data has been updated!",
                type: "success",
                allowOutsideClick: false
                })
                .then(response => {
                location.reload();
                });
            },
            fail => {
            this.errors = fail.errors;
            this.$swal("Error!", "Please fill up all required fields.", "error");
            })

        },
        uploadOrganizer(e) {
        var files = e.target.files[0];
        return event.uploadOrganizerLogo(files).then(success => {
            this.data.organizer.imageUrl = success.data.data.fullPath;
        });
        },

        uploadImages(e) {
        var selectedFiles = e.target.files;
        for (var a = 0; a < selectedFiles.length; a++) {
            event.uploadEventImages(selectedFiles[a]).then(success => {
            this.data.eventImages.push({
                "path": success.data.data.path,
                "fileName": success.data.data.fileName,
                "fullPath": success.data.data.fullPath
            });
            });

        }
        },

        uploadSegmentImage(e, index) {
        var files = e.target.files[0];
        return event.uploadEventBanner(files, 'eventSegmentImages').then(success => {
            console.log(success);
            this.data.segments[index].locationImages[0].path = success.data.data.path;
            this.data.segments[index].locationImages[0].fileName = success.data.data.fileName;
            this.data.segments[index].locationImages[0].fullPath = success.data.data.fullPath;
        });
        },

        removeSectionImage(index, imgKey) {
        // console.log(index);
        $('.segmentImages' + imgKey).val('');
        // this.data.segments[index].locationImages.splice(imgKey, 1);
        this.data.segments[index].locationImages[0].path = '';
        this.data.segments[index].locationImages[0].fileName = '';
        this.data.segments[index].locationImages[0].fullPath = '';
        },

        addMoreDay() {
        this.data.eventDays.push({
            date: new Date(),
            schedules: [
            {
                title: "",
                time: "12:00"
            }
            ]
        });
        var key =  this.data.eventDays.length - 1;
        this.moveDAy = '#day'+key;
        // $('#moveToAddDay a').click();
        setTimeout(()=>{
        var elmnt = document.getElementById('day'+key);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        },300);
        },
        addDaySchedule(index) {
        this.data.eventDays[index].schedules.push({
            title: "",
            time: "12:00"
        });

        var timeKey =  this.data.eventDays[index].schedules.length - 1;
        var key =  this.data.eventDays.length - 1;
        this.moveDAy = '#timeslot'+timeKey;

    //    scroll to new timeslot
        setTimeout(()=>{
        var elmnt = document.getElementById('day'+index+'timeslot'+timeKey);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        },300);
        },
        removeDay(index) {
        this.data.eventDays.splice(index, 1);
            //  setTimeout(()=>{
        var key =  this.data.eventDays.length - 1;
        var elmnt = document.getElementById('day'+key);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        
        // },500);
        },
        removeDaySchedule(index, key) {
        this.data.eventDays[index].schedules.splice(key, 1);

        var key =  this.data.eventDays.length - 1;
        var timeKey =  this.data.eventDays[index].schedules.length - 1;
        var elmnt = document.getElementById('day'+index+'timeslot'+timeKey);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        },
        addExhibitor() {
        this.data.segments.push({
            title: "",
            segmentExhibitors: [
            {
                description: ""
            }
            ],
            locationImages: [{
            path: '',
            fileName: ''
            }]

        });

        //    scroll to new timeslot
        var key =  this.data.segments.length - 1;
        // this.moveDAy = '#exhibitors'+key;
        setTimeout(()=>{
            var elmnt = document.getElementById('exhibitor'+key);
            elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        },300);
        },

        removeExhibitor(index) {
        this.data.segments.splice(index, 1);
        var key =  this.data.segments.length - 1;
        var elmnt = document.getElementById('exhibitor'+key);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        },

        addList(index) {
        this.data.segments[index].segmentExhibitors.push({
            description: ""
        });
        },

        removeList(rootIndex, index) {
        this.data.segments[rootIndex].segmentExhibitors.splice(index, 1);
        },

        removeOrganizerLogo() {
        this.data.organizer.imageUrl = '';
        const input = this.$refs.orgLogo;
        input.type = 'text';
        input.type = 'file';
        },

        removeImage(index) {
        this.data.eventImages.splice(index, 1);
        const img = this.$refs.eventImage;
        img.type = 'text';
        img.type = 'file';
        },

        getEventInfo() {
        var id = this.$route.params.id;
        return event.info(id).then(success => {
            this.data = success.data.data;
            this.convertIsoToDateTime(this.data);
        })
        }
    },
    mounted() {
        if (this.$route.params.id) {
        this.getEventInfo();
        }
    }
};