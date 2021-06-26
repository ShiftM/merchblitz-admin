<template>
  <div id="qr-code" align="center">
    <qrcode-vue :value="$route.params.id" :size="config.size" level="H" :class="`mt-5`"/>
    <div class="no-print mt-5">
      <div class="row">
        <div class="col-sm-12">
          <button type="button" class="btn btn-danger" @click="$router.go(-1)">BACK</button>
          <button type="button" class="btn btn-primary ml-3" @click="print()">PRINT</button>
        </div>
      </div>  
    </div>
  </div>
</template>

<style scope scoped>
  @media print
  {
    .no-print, .no-print *
    {
      display: none !important;
    }
  }
</style>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    components: {
      QrcodeVue,
    },
    data() {
      return {
        config: {
          size: 350,
        }
      }
    },
    mounted() {

    },
    methods: {
      print() {
        var canvas = document.getElementsByTagName('canvas');
        var dataURL = canvas[0].toDataURL("image/png");
        var html  = '<html><head><title>QR Code</title></head>';
        html += '<body style="width: 100%;"';
        html += ' onload="window.focus(); window.print(); window.close()">';
        html += '<table style="width: 100%; height:100%"><tr><td style="text-align: center;">';
        html += '<img src="' + dataURL + '" /></td></tr></table></body></html>';
        var qr = window.open("");
        qr.document.write(html);
        setTimeout(function() {
          qr.print();
          qr.close();
        }, 500);
      }
    }
  }
</script>
