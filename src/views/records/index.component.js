import { alertService } from "../../services/alert/alert.service";
import { recordService } from "../../services/record/record.service";

import VueExcelXlsx from "vue-excel-xlsx";
import Vue from "vue";
import VueScrollingTable from "vue-scrolling-table"
import "vue-scrolling-table/dist/style.css"

Vue.use(VueExcelXlsx);
Vue.use(VueScrollingTable);


export default {
    data: () => {
        return {
            data: [],
            middledata: [],
            filter: {
                paginate: true,
                per_page: 2000,
                page: 1,
                status_option_id: 1,
                related_status_option_id: 1,
                with_related_models: true,
                order_by: 'DESC',
                order_by_key: 'id',
                has_featured: false
            },
            suggestions: {},
            columns: [
                {
                    label: "Id",
                    field: "id",
                },
                {
                    label: "Store_id",
                    field: "store_id",
                },
                {
                    label: "store_branch",
                    field: "store_branch",
                },
                {
                    label: "store_name",
                    field: "store_name",
                },
                {
                    label: "store_owner_name",
                    field: "store_owner_name",
                },
                {
                    label: "contact_number",
                    field: "contact_number",
                },
                {
                    label: "age",
                    field: "age",
                },
                {
                    label: "street",
                    field: "street",
                },
                {
                    label: "town_city",
                    field: "town_city",
                },
                {
                    label: "banner",
                    field: "banner",
                },
                {
                    label: "poster",
                    field: "poster",
                },
                {
                    label: "grill_talker",
                    field: "grill_talker",
                },
                {
                    label: "wall_sticker",
                    field: "wall_sticker",
                },
                {
                    label: "cash_mat",
                    field: "cash_mat",
                },
                {
                    label: "awning",
                    field: "awning",
                },
                {
                    label: "store_signage",
                    field: "store_signage",
                },

                {
                    label: 'CHESTERFIELD',
                    field: 'chesterfield_availability',
                },
                {
                    label: 'CHESTERFIELD',
                    field: 'chesterfield_price',
                },
                {
                    label: 'CHESTERFIELD',
                    field: 'chesterfield_packssold',
                },
                {
                    label: 'FORTUNE GREEN',
                    field: 'fortunegreen_availability',
                },
                {
                    label: 'FORTUNE GREEN',
                    field: 'fortunegreen_price',
                },
                {
                    label: 'FORTUNE GREEN',
                    field: 'fortunegreen_packssold',
                },
                {
                    label: 'FORTUNE LIGHTS',
                    field: 'fortunelights_availability',
                },
                {
                    label: 'FORTUNE LIGHTS',
                    field: 'fortunelights_price',
                },
                {
                    label: 'FORTUNE LIGHTS',
                    field: 'fortunelights_packssold',
                },
                {
                    label: 'FORTUNE MINT SPLASH',
                    field: 'fortunemintsplash_availability',
                },
                {
                    label: 'FORTUNE MINT SPLASH',
                    field: 'fortunemintsplash_price',
                },
                {
                    label: 'FORTUNE MINT SPLASH',
                    field: 'fortunemintsplash_packssold',
                },

                {
                    label: 'FORTUNE LPE',
                    field: 'fortunelpe_availability',
                },
                {
                    label: 'FORTUNE LPE',
                    field: 'fortunelpe_price',
                },
                {
                    label: 'FORTUNE LPE',
                    field: 'fortunelpe_packssold',
                },
                {
                    label: 'FORTUNE RED',
                    field: 'fortunered_availability',
                },
                {
                    label: 'FORTUNE RED',
                    field: 'fortunered_price',
                },
                {
                    label: 'FORTUNE RED',
                    field: 'fortunered_packssold',
                },

                {
                    label: 'JACKPOT GREEN',
                    field: 'jackpotgreen_availability',
                },
                {
                    label: 'JACKPOT GREEN',
                    field: 'jackpotgreen_price',
                },
                {
                    label: 'JACKPOT GREEN',
                    field: 'jackpotgreen_packssold',
                },
                {
                    label: 'JACKPOT RED',
                    field: 'jackpotred_availability',
                },
                {
                    label: 'JACKPOT RED',
                    field: 'jackpotred_price',
                },
                {
                    label: 'JACKPOT RED',
                    field: 'jackpotred_packssold',
                },
                {
                    label: 'MARLBORO BLACK MENTHOL',
                    field: 'marlboroblack_availability',
                },
                {
                    label: 'MARLBORO BLACK MENTHOL',
                    field: 'marlboroblack_price',
                },
                {
                    label: 'MARLBORO BLACK MENTHOL',
                    field: 'marlboroblack_packssold',
                },
                {
                    label: 'MARLBORO GOLD',
                    field: 'marlborogold_availability',
                },
                {
                    label: 'MARLBORO GOLD',
                    field: 'marlborogold_price',
                },
                {
                    label: 'MARLBORO GOLD',
                    field: 'marlborogold_packssold',
                },
                {
                    label: 'MARLBORO ICE BLAST',
                    field: 'marlboroiceblast_availability',
                },
                {
                    label: 'MARLBORO ICE BLAST',
                    field: 'marlboroiceblast_price',
                },
                {
                    label: 'MARLBORO ICE BLAST',
                    field: 'marlboroiceblast_packssold',
                },
                {
                    label: 'MORE',
                    field: 'more_availability',
                },
                {
                    label: 'MORE',
                    field: 'more_price',
                },
                {
                    label: 'MORE',
                    field: 'more_packssold',
                },
                {
                    label: 'PHILIP MORRIS RED',
                    field: 'philipmorrisred_availability',
                },
                {
                    label: 'PHILIP MORRIS RED',
                    field: 'philipmorrisred_price',
                },
                {
                    label: 'PHILIP MORRIS RED',
                    field: 'philipmorrisred_packssold',
                },
                {
                    label: 'MARVELS M100',
                    field: 'marvelsm100_availability',
                },
                {
                    label: 'MARVELS M100',
                    field: 'marvelsm100_price',
                },
                {
                    label: 'MARVELS M100',
                    field: 'marvelsm100_packssold',
                },
                {
                    label: 'MARVELS RED',
                    field: 'marvelsred_availability',
                },
                {
                    label: 'MARVELS RED',
                    field: 'marvelsred_price',
                },
                {
                    label: 'MARVELS RED',
                    field: 'marvelsred_packssold',
                },
                {
                    label: 'MIGHTY GREEN',
                    field: 'mightygreen_availability',
                },
                {
                    label: 'MIGHTY GREEN',
                    field: 'mightygreen_price',
                },
                {
                    label: 'MIGHTY GREEN',
                    field: 'mightygreen_packssold',
                },
                {
                    label: 'MIGHTY M100',
                    field: 'mightym100_availability',
                },
                {
                    label: 'MIGHTY M100',
                    field: 'mightym100_price',
                },
                {
                    label: 'MIGHTY M100',
                    field: 'mightym100_packssold',
                },
                {
                    label: 'MIGHTY M100 10s',
                    field: 'mightym10010s_availability',
                },
                {
                    label: 'MIGHTY M100 10s',
                    field: 'mightym10010s_price',
                },
                {
                    label: 'MIGHTY M100 10s',
                    field: 'mightym10010s_packssold',
                },
                {
                    label: 'MIGHTY RED',
                    field: 'mightyred_availability',
                },
                {
                    label: 'MIGHTY RED',
                    field: 'mightyred_price',
                },
                {
                    label: 'MIGHTY RED',
                    field: 'mightyred_packssold',
                },
                {
                    label: 'MIGHTY RED 10s',
                    field: 'mightyred10s_availability',
                },
                {
                    label: 'MIGHTY RED 10s',
                    field: 'mightyred10s_price',
                },
                {
                    label: 'MIGHTY RED 10s',
                    field: 'mightyred10s_packssold',
                },
                {
                    label: 'CAMEL LIGHTS',
                    field: 'camellights_availability',
                },
                {
                    label: 'CAMEL LIGHTS',
                    field: 'camellights_price',
                },
                {
                    label: 'CAMEL LIGHTS',
                    field: 'camellights_packssold',
                },
                {
                    label: 'CAMEL MENTHOL',
                    field: 'camelmenthol_availability',
                },
                {
                    label: 'CAMEL MENTHOL',
                    field: 'camelmenthol_price',
                },
                {
                    label: 'CAMEL MENTHOL',
                    field: 'camelmenthol_packssold',
                },
                {
                    label: 'CAMEL RED',
                    field: 'camelred_availability',
                },
                {
                    label: 'CAMEL RED',
                    field: 'camelred_price',
                },
                {
                    label: 'CAMEL RED',
                    field: 'camelred_packssold',
                },
                {
                    label: 'WINSTON CASTER BLEND',
                    field: 'winstoncasterblend_availability',
                },
                {
                    label: 'WINSTON CASTER BLEND',
                    field: 'winstoncasterblend_price',
                },
                {
                    label: 'WINSTON CASTER BLEND',
                    field: 'winstoncasterblend_packssold',
                },
                {
                    label: 'WINSTON INFINIMINT',
                    field: 'winstoninfinimint_availability',
                },
                {
                    label: 'WINSTON INFINIMINT',
                    field: 'winstoninfinimint_price',
                },
                {
                    label: 'WINSTON INFINIMINT',
                    field: 'winstoninfinimint_packssold',
                },
                {
                    label: 'WINSTON LIGHTS',
                    field: 'winstonlights_availability',
                },
                {
                    label: 'WINSTON LIGHTS',
                    field: 'winstonlights_price',
                },
                {
                    label: 'WINSTON LIGHTS',
                    field: 'winstonlights_packssold',
                },
                {
                    label: 'WINSTON PURPLE MINT',
                    field: 'winstonpurplemint_availability',
                },
                {
                    label: 'WINSTON PURPLE MINT',
                    field: 'winstonpurplemint_price',
                },
                {
                    label: 'WINSTON PURPLE MINT',
                    field: 'winstonpurplemint_packssold',
                },
                {
                    label: 'WINSTON RED',
                    field: 'winstonred_availability',
                },
                {
                    label: 'WINSTON RED',
                    field: 'winstonred_price',
                },
                {
                    label: 'WINSTON RED',
                    field: 'winstonred_packssold',
                },
                {
                    label: 'WINSTON XTM MINT',
                    field: 'winstonxtmmint_availability',
                },
                {
                    label: 'WINSTON XTM MINT',
                    field: 'winstonxtmmint_price',
                },
                {
                    label: 'WINSTON XTM MINT',
                    field: 'winstonxtmmint_packssold',
                },
                {
                    label: 'WINNSBORO LIGHTS',
                    field: 'winnsborolights_availability',
                },
                {
                    label: 'WINNSBORO LIGHTS',
                    field: 'winnsborolights_price',
                },
                {
                    label: 'WINNSBORO LIGHTS',
                    field: 'winnsborolights_packssold',
                },
                {
                    label: 'WINNSBORO M100',
                    field: 'winnsborom100_availability',
                },
                {
                    label: 'WINNSBORO M100',
                    field: 'winnsborom100_price',
                },
                {
                    label: 'WINNSBORO M100',
                    field: 'winnsborom100_packssold',
                },
                {
                    label: 'WINNSBORO RED',
                    field: 'winnsborored_availability',
                },
                {
                    label: 'WINNSBORO RED',
                    field: 'winnsborored_price',
                },
                {
                    label: 'WINNSBORO RED',
                    field: 'winnsborored_packssold',
                },
                {
                    label: 'ASTRO FULL FLAVOR',
                    field: 'astrofullflavor_availability',
                },
                {
                    label: 'ASTRO FULL FLAVOR',
                    field: 'astrofullflavor_price',
                },
                {
                    label: 'ASTRO FULL FLAVOR',
                    field: 'astrofullflavor_packssold',
                },
                {
                    label: 'ASTRO MENTHOL',
                    field: 'astromenthol_availability',
                },
                {
                    label: 'ASTRO MENTHOL',
                    field: 'astromenthol_price',
                },
                {
                    label: 'ASTRO MENTHOL',
                    field: 'astromenthol_packssold',
                },
                {
                    label: 'BLAZE',
                    field: 'blaze_availability',
                },
                {
                    label: 'BLAZE',
                    field: 'blaze_price',
                },
                {
                    label: 'BLAZE',
                    field: 'blaze_packssold',
                },
                {
                    label: 'D&B',
                    field: 'd&b_availability',
                },
                {
                    label: 'D&B',
                    field: 'd&b_price',
                },
                {
                    label: 'D&B',
                    field: 'd&b_packssold',
                },
                {
                    label: 'DALLAS',
                    field: 'dallas_availability',
                },
                {
                    label: 'DALLAS',
                    field: 'dallas_price',
                },
                {
                    label: 'DALLAS',
                    field: 'dallas_packssold',
                },
                {
                    label: 'FAR STAR',
                    field: 'farstar_availability',
                },
                {
                    label: 'FAR STAR',
                    field: 'farstar_price',
                },
                {
                    label: 'FAR STAR',
                    field: 'farstar_packssold',
                },
                {
                    label: 'FILHARVEST-MENTHOL',
                    field: 'filharvestmenthol_availability',
                },
                {
                    label: 'FILHARVEST-MENTHOL',
                    field: 'filharvestmenthol_price',
                },
                {
                    label: 'FILHARVEST-MENTHOL',
                    field: 'filharvestmenthol_packssold',
                },
                {
                    label: 'FILHARVEST-NON MENTHOL',
                    field: 'filharvestnon_availability',
                },
                {
                    label: 'FILHARVEST-NON MENTHOL',
                    field: 'filharvestnon_price',
                },
                {
                    label: 'FILHARVEST-NON MENTHOL',
                    field: 'filharvestnon_packssold',
                },
                {
                    label: 'FORT',
                    field: 'fort_availability',
                },
                {
                    label: 'FORT',
                    field: 'fort_price',
                },
                {
                    label: 'FORT',
                    field: 'fort_packssold',
                },
                {
                    label: 'JOURNEY',
                    field: 'journey_availability',
                },
                {
                    label: 'JOURNEY',
                    field: 'journey_price',
                },
                {
                    label: 'JOURNEY',
                    field: 'journey_packssold',
                },
                {
                    label: 'MEMPHIS',
                    field: 'memphis_availability',
                },
                {
                    label: 'MEMPHIS',
                    field: 'memphis_price',
                },
                {
                    label: 'MEMPHIS',
                    field: 'memphis_packssold',
                },

                {
                    label: 'MODERN',
                    field: 'modern_availability',
                },
                {
                    label: 'MODERN',
                    field: 'modern_price',
                },
                {
                    label: 'MODERN',
                    field: 'modern_packssold',
                },
                {
                    label: 'NAVY',
                    field: 'navy_availability',
                },
                {
                    label: 'NAVY',
                    field: 'navy_price',
                },
                {
                    label: 'NAVY',
                    field: 'navy_packssold',
                },
                {
                    label: 'PENTAGON',
                    field: 'pentagon_availability',
                },
                {
                    label: 'PENTAGON',
                    field: 'pentagon_price',
                },
                {
                    label: 'PENTAGON',
                    field: 'pentagon_packssold',
                },
                {
                    label: 'RGD LIGHTS',
                    field: 'rgdlights_availability',
                },
                {
                    label: 'RGD LIGHTS',
                    field: 'rgdlights_price',
                },
                {
                    label: 'RGD LIGHTS',
                    field: 'rgdlights_packssold',
                },
                {
                    label: 'RGD RED',
                    field: 'rgdred_availability',
                },
                {
                    label: 'RGD RED',
                    field: 'rgdred_price',
                },
                {
                    label: 'RGD RED',
                    field: 'rgdred_packssold',
                },
                {
                    label: 'TWO MOON LIGHTS',
                    field: 'twomoonlights_availability',
                },
                {
                    label: 'TWO MOON LIGHTS',
                    field: 'twomoonlights_price',
                },
                {
                    label: 'TWO MOON LIGHTS',
                    field: 'twomoonlights_packssold',
                },
                {
                    label: 'TWO MOON MENTHOL',
                    field: 'twomoonmenthol_availability',
                },
                {
                    label: 'TWO MOON MENTHOL',
                    field: 'twomoonmenthol_price',
                },
                {
                    label: 'TWO MOON MENTHOL',
                    field: 'twomoonmenthol_packssold',
                },
                {
                    label: 'TWO MOON RED',
                    field: 'twomoonred_availability',
                },
                {
                    label: 'TWO MOON RED',
                    field: 'twomoonred_price',
                },
                {
                    label: 'TWO MOON RED',
                    field: 'twomoonred_packssold',
                },
                {
                    label: 'UNION',
                    field: 'union_availability',
                },
                {
                    label: 'UNION',
                    field: 'union_price',
                },
                {
                    label: 'UNION',
                    field: 'union_packssold',
                },

                {
                    label: "report_by",
                    field: "report_by",
                },
                {
                    label: "long",
                    field: "long",
                },
                {
                    label: "lat",
                    field: "lat",
                },
                {
                    label: "created_at",
                    field: "created_at",
                },
                {
                    label: "updated_at",
                    field: "updated_at",
                },
            ],
        }
    },
    async mounted() {

        await this.list(this.filter);
        // FORMAT DATA 

        this.data.data.map((val) => {
            val.report_by = JSON.parse(val.report_by)
            val.created_at = new Date(val.created_at).toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong' })
            return val;
        })

    },
    methods: {
        async test(value) {
            console.log(value);
        },
        async search(data) {

            this.filter = Object.assign(this.filter, data);
            await this.list(this.filter);
        },
        async list(data) {
            this.data = await recordService.list(data)
            this.data.data = this.data.data.reverse()
            this.middledata = this.data

            // Prepare the sheet
            this.iterate() 
        },

        async reload() {

            await this.list(this.filter);
            // FORMAT DATA 
    
            this.data.data.map((val) => {
                val.report_by = JSON.parse(val.report_by)
                val.created_at = new Date(val.created_at).toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong' })
                return val;
            })
        },

        async clear() {
            // this.filter.name = '';
            // this.search();
            console.log(this.columns)

        },
        async iterate() {

            this.middledata.data.map((val) => {

                val.chesterfield_availability = 'N/A'
                val.chesterfield_price = 'N/A'
                val.chesterfield_packssold = 'N/A'
                val.fortunegreen_availability = 'N/A'
                val.fortunegreen_price = 'N/A'
                val.fortunegreen_packssold = 'N/A'
                val.fortunelights_availability = 'N/A'
                val.fortunelights_price = 'N/A'
                val.fortunelights_packssold = 'N/A'
                val.fortunemintsplash_availability = 'N/A'
                val.fortunemintsplash_price = 'N/A'
                val.fortunemintsplash_packssold = 'N/A'
                val.fortunelpe_availability = 'N/A'
                val.fortunelpe_price = 'N/A'
                val.fortunelpe_packssold = 'N/A'
                val.fortunered_availability = 'N/A'
                val.fortunered_price = 'N/A'
                val.fortunered_packssold = 'N/A'
                val.jackpotgreen_availability = 'N/A'
                val.jackpotgreen_price = 'N/A'
                val.jackpotgreen_packssold = 'N/A'
                val.jackpotred_availability = 'N/A'
                val.jackpotred_price = 'N/A'
                val.jackpotred_packssold = 'N/A'
                val.marlboroblack_availability = 'N/A'
                val.marlboroblack_price = 'N/A'
                val.marlboroblack_packssold = 'N/A'
                val.marlborogold_availability = 'N/A'
                val.marlborogold_price = 'N/A'
                val.marlborogold_packssold = 'N/A'
                val.marlboroiceblast_availability = 'N/A'
                val.marlboroiceblast_price = 'N/A'
                val.marlboroiceblast_packssold = 'N/A'
                val.more_availability = 'N/A'
                val.more_price = 'N/A'
                val.more_packssold = 'N/A'
                val.philipmorrisred_availability = 'N/A'
                val.philipmorrisred_price = 'N/A'
                val.philipmorrisred_packssold = 'N/A'
                val.marvelsm100_availability = 'N/A'
                val.marvelsm100_price = 'N/A'
                val.marvelsm100_packssold = 'N/A'
                val.marvelsred_availability = 'N/A'
                val.marvelsred_price = 'N/A'
                val.marvelsred_packssold = 'N/A'
                val.mightygreen_availability = 'N/A'
                val.mightygreen_price = 'N/A'
                val.mightygreen_packssold = 'N/A'
                val.mightym100_availability = 'N/A'
                val.mightym100_price = 'N/A'
                val.mightym100_packssold = 'N/A'
                val.mightym10010s_availability = 'N/A'
                val.mightym10010s_price = 'N/A'
                val.mightym10010s_packssold = 'N/A'
                val.mightyred_availability = 'N/A'
                val.mightyred_price = 'N/A'
                val.mightyred_packssold = 'N/A'
                val.mightyred10s_availability = 'N/A'
                val.mightyred10s_price = 'N/A'
                val.mightyred10s_packssold = 'N/A'
                val.camellights_availability = 'N/A'
                val.camellights_price = 'N/A'
                val.camellights_packssold = 'N/A'
                val.camelmenthol_availability = 'N/A'
                val.camelmenthol_price = 'N/A'
                val.camelmenthol_packssold = 'N/A'
                val.camelred_availability = 'N/A'
                val.camelred_price = 'N/A'
                val.camelred_packssold = 'N/A'
                val.winstoncasterblend_availability = 'N/A'
                val.winstoncasterblend_price = 'N/A'
                val.winstoncasterblend_packssold = 'N/A'
                val.winstoninfinimint_availability = 'N/A'
                val.winstoninfinimint_price = 'N/A'
                val.winstoninfinimint_packssold = 'N/A'
                val.winstonlights_availability = 'N/A'
                val.winstonlights_price = 'N/A'
                val.winstonlights_packssold = 'N/A'
                val.winstonpurplemint_availability = 'N/A'
                val.winstonpurplemint_price = 'N/A'
                val.winstonpurplemint_packssold = 'N/A'
                val.winstonred_availability = 'N/A'
                val.winstonred_price = 'N/A'
                val.winstonred_packssold = 'N/A'
                val.winstonxtmmint_availability = 'N/A'
                val.winstonxtmmint_price = 'N/A'
                val.winstonxtmmint_packssold = 'N/A'
                val.winnsborolights_availability = 'N/A'
                val.winnsborolights_price = 'N/A'
                val.winnsborolights_packssold = 'N/A'
                val.winnsborom100_availability = 'N/A'
                val.winnsborom100_price = 'N/A'
                val.winnsborom100_packssold = 'N/A'
                val.winnsborored_availability = 'N/A'
                val.winnsborored_price = 'N/A'
                val.winnsborored_packssold = 'N/A'
                val.astrofullflavor_availability = 'N/A'
                val.astrofullflavor_price = 'N/A'
                val.astrofullflavor_packssold = 'N/A'
                val.astromenthol_availability = 'N/A'
                val.astromenthol_price = 'N/A'
                val.astromenthol_packssold = 'N/A'
                val.blaze_availability = 'N/A'
                val.blaze_price = 'N/A'
                val.blaze_packssold = 'N/A'
                val['d&b_availability'] = 'N/A'
                val['d&b_price'] = 'N/A'
                val['d&b_packssold'] = 'N/A'
                val.dallas_availability = 'N/A'
                val.dallas_price = 'N/A'
                val.dallas_packssold = 'N/A'
                val.farstar_availability = 'N/A'
                val.farstar_price = 'N/A'
                val.farstar_packssold = 'N/A'
                val.filharvestmenthol_availability = 'N/A'
                val.filharvestmenthol_price = 'N/A'
                val.filharvestmenthol_packssold = 'N/A'
                val.filharvestnon_availability = 'N/A'
                val.filharvestnon_price = 'N/A'
                val.filharvestnon_packssold = 'N/A'
                val.fort_availability = 'N/A'
                val.fort_price = 'N/A'
                val.fort_packssold = 'N/A'
                val.journey_availability = 'N/A'
                val.journey_price = 'N/A'
                val.journey_packssold = 'N/A'
                val.memphis_availability = 'N/A'
                val.memphis_price = 'N/A'
                val.memphis_packssold = 'N/A'
                val.modern_availability = 'N/A'
                val.modern_price = 'N/A'
                val.modern_packssold = 'N/A'
                val.navy_availability = 'N/A'
                val.navy_price = 'N/A'
                val.navy_packssold = 'N/A'
                val.pentagon_availability = 'N/A'
                val.pentagon_price = 'N/A'
                val.pentagon_packssold = 'N/A'
                val.rgdlights_availability = 'N/A'
                val.rgdlights_price = 'N/A'
                val.rgdlights_packssold = 'N/A'
                val.rgdred_availability = 'N/A'
                val.rgdred_price = 'N/A'
                val.rgdred_packssold = 'N/A'
                val.twomoonlights_availability = 'N/A'
                val.twomoonlights_price = 'N/A'
                val.twomoonlights_packssold = 'N/A'
                val.twomoonmenthol_availability = 'N/A'
                val.twomoonmenthol_price = 'N/A'
                val.twomoonmenthol_packssold = 'N/A'
                val.twomoonred_availability = 'N/A'
                val.twomoonred_price = 'N/A'
                val.twomoonred_packssold = 'N/A'
                val.union_availability = 'N/A'
                val.union_price = 'N/A'
                val.union_packssold = 'N/A'
                // ITERATE THROUGH EACH PRODUCT
                val.products[0].map((product) => {
                    // ITERATE THROUGH COLUMN DATA

                    let matchCount = 0;

                    this.columns.map((col, index) => {

                        // console.log(product.title)
                        //     // FIND A MATCH
                        if (col.label == product.title) {


                            switch (product.title) {
                                case "CHESTERFIELD":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.chesterfield_availability = 'Y'
                                            break;
                                        case 1:
                                            val.chesterfield_price = product.price
                                            break;
                                        case 2:
                                            val.chesterfield_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;

                                case "FORTUNE GREEN":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.fortunelights_availability = 'Y'
                                            break;
                                        case 1:
                                            val.fortunelights_price = product.price
                                            break;
                                        case 2:
                                            val.fortunelights_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;

                                case "FORTUNE LIGHTS":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.fortunelights_availability = 'Y'
                                            break;
                                        case 1:
                                            val.fortunelights_price = product.price
                                            break;
                                        case 2:
                                            val.fortunelights_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "FORTUNE MINT SPLASH":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.fortunemintsplash_availability = 'Y'
                                            break;
                                        case 1:
                                            val.fortunemintsplash_price = product.price
                                            break;
                                        case 2:
                                            val.fortunemintsplash_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;

                                case "FORTUNE LPE":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.fortunelpe_availability = 'Y'
                                            break;
                                        case 1:
                                            val.fortunelpe_price = product.price
                                            break;
                                        case 2:
                                            val.fortunelpe_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;

                                case "FORTUNE RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.fortunered_availability = 'Y'
                                            break;
                                        case 1:
                                            val.fortunered_price = product.price
                                            break;
                                        case 2:
                                            val.fortunered_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "JACKPOT GREEN":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.jackpotgreen_availability = 'Y'
                                            break;
                                        case 1:
                                            val.jackpotgreen_price = product.price
                                            break;
                                        case 2:
                                            val.jackpotgreen_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "JACKPOT RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.jackpotred_availability = 'Y'
                                            break;
                                        case 1:
                                            val.jackpotred_price = product.price
                                            break;
                                        case 2:
                                            val.jackpotred_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MARLBORO BLACK":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.marlboroblack_availability = 'Y'
                                            break;
                                        case 1:
                                            val.marlboroblack_price = product.price
                                            break;
                                        case 2:
                                            val.marlboroblack_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MARLBORO GOLD":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.marlborogold_availability = 'Y'
                                            break;
                                        case 1:
                                            val.marlborogold_price = product.price
                                            break;
                                        case 2:
                                            val.marlborogold_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MARLBORO ICE BLAST":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.marlboroiceblast_availability = 'Y'
                                            break;
                                        case 1:
                                            val.marlboroiceblast_price = product.price
                                            break;
                                        case 2:
                                            val.marlboroiceblast_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MORE":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.more_availability = 'Y'
                                            break;
                                        case 1:
                                            val.more_price = product.price
                                            break;
                                        case 2:
                                            val.more_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "PHILIP MORRIS RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.philipmorrisred_availability = 'Y'
                                            break;
                                        case 1:
                                            val.philipmorrisred_price = product.price
                                            break;
                                        case 2:
                                            val.philipmorrisred_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MARVELS M100":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.marvelsm100_availability = 'Y'
                                            break;
                                        case 1:
                                            val.marvelsm100_price = product.price
                                            break;
                                        case 2:
                                            val.marvelsm100_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MARVELS RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.marvelsred_availability = 'Y'
                                            break;
                                        case 1:
                                            val.marvelsred_price = product.price
                                            break;
                                        case 2:
                                            val.marvelsred_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MIGHTY GREEN":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.mightygreen_availability = 'Y'
                                            break;
                                        case 1:
                                            val.mightygreen_price = product.price
                                            break;
                                        case 2:
                                            val.mightygreen_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MIGHTY M100":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.mightym100_availability = 'Y'
                                            break;
                                        case 1:
                                            val.mightym100_price = product.price
                                            break;
                                        case 2:
                                            val.mightym100_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MIGHTY M100 10s":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.mightym10010s_availability = 'Y'
                                            break;
                                        case 1:
                                            val.mightym10010s_price = product.price
                                            break;
                                        case 2:
                                            val.mightym10010s_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MIGHTY RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.mightyred_availability = 'Y'
                                            break;
                                        case 1:
                                            val.mightyred_price = product.price
                                            break;
                                        case 2:
                                            val.mightyred_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MIGHTY RED 10s":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.mightyred10s_availability = 'Y'
                                            break;
                                        case 1:
                                            val.mightyred10s_price = product.price
                                            break;
                                        case 2:
                                            val.mightyred10s_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "CAMEL LIGHTS":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.camellights_availability = 'Y'
                                            break;
                                        case 1:
                                            val.camellights_price = product.price
                                            break;
                                        case 2:
                                            val.camellights_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "CAMEL MENTHOL":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.camelmenthol_availability = 'Y'
                                            break;
                                        case 1:
                                            val.camelmenthol_price = product.price
                                            break;
                                        case 2:
                                            val.camelmenthol_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "CAMEL RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.camelred_availability = 'Y'
                                            break;
                                        case 1:
                                            val.camelred_price = product.price
                                            break;
                                        case 2:
                                            val.camelred_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINSTON CASTER BLEND":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winstoncasterblend_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winstoncasterblend_price = product.price
                                            break;
                                        case 2:
                                            val.winstoncasterblend_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINSTON INFINIMINT":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winstoninfinimint_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winstoninfinimint_price = product.price
                                            break;
                                        case 2:
                                            val.winstoninfinimint_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINSTON LIGHTS":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winstonlights_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winstonlights_price = product.price
                                            break;
                                        case 2:
                                            val.winstonlights_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINSTON PURPLE MINT":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winstonpurplemint_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winstonpurplemint_price = product.price
                                            break;
                                        case 2:
                                            val.winstonpurplemint_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINSTON RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winstonred_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winstonred_price = product.price
                                            break;
                                        case 2:
                                            val.winstonred_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINSTON XTM MINT":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winstonxtmmint_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winstonxtmmint_price = product.price
                                            break;
                                        case 2:
                                            val.winstonxtmmint_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINNSBORO LIGHTS":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winnsborolights_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winnsborolights_price = product.price
                                            break;
                                        case 2:
                                            val.winnsborolights_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINNSBORO M100":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winnsborom100_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winnsborom100_price = product.price
                                            break;
                                        case 2:
                                            val.winnsborom100_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "WINNSBORO RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.winnsborored_availability = 'Y'
                                            break;
                                        case 1:
                                            val.winnsborored_price = product.price
                                            break;
                                        case 2:
                                            val.winnsborored_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "ASTRO FULL FLAVOR":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.astrofullflavor_availability = 'Y'
                                            break;
                                        case 1:
                                            val.astrofullflavor_price = product.price
                                            break;
                                        case 2:
                                            val.astrofullflavor_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "ASTRO MENTHOL":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.astromenthol_availability = 'Y'
                                            break;
                                        case 1:
                                            val.astromenthol_price = product.price
                                            break;
                                        case 2:
                                            val.astromenthol_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "BLAZE":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.blaze_availability = 'Y'
                                            break;
                                        case 1:
                                            val.blaze_price = product.price
                                            break;
                                        case 2:
                                            val.blaze_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "D&B":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val['d&b_availability'] = 'Y'
                                            break;
                                        case 1:
                                            val['d&b_price'] = product.price
                                            break;
                                        case 2:
                                            val['d&b_packssold'] = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "DALLAS":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.dallas_availability = 'Y'
                                            break;
                                        case 1:
                                            val.dallas_price = product.price
                                            break;
                                        case 2:
                                            val.dallas_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "FAR STAR":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.farstar_availability = 'Y'
                                            break;
                                        case 1:
                                            val.farstar_price = product.price
                                            break;
                                        case 2:
                                            val.farstar_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "FILHARVEST-MENTHOL":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.filharvestmenthol_availability = 'Y'
                                            break;
                                        case 1:
                                            val.filharvestmenthol_price = product.price
                                            break;
                                        case 2:
                                            val.filharvestmenthol_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "FILHARVEST-NON MENTHOL":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.filharvestnon_availability = 'Y'
                                            break;
                                        case 1:
                                            val.filharvestnon_price = product.price
                                            break;
                                        case 2:
                                            val.filharvestnon_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;

                                case "FORT":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.fort_availability = 'Y'
                                            break;
                                        case 1:
                                            val.fort_price = product.price
                                            break;
                                        case 2:
                                            val.fort_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "JOURNEY":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.journey_availability = 'Y'
                                            break;
                                        case 1:
                                            val.journey_price = product.price
                                            break;
                                        case 2:
                                            val.journey_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MEMPHIS":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.memphis_availability = 'Y'
                                            break;
                                        case 1:
                                            val.memphis_price = product.price
                                            break;
                                        case 2:
                                            val.memphis_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "MODERN":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.modern_availability = 'Y'
                                            break;
                                        case 1:
                                            val.modern_price = product.price
                                            break;
                                        case 2:
                                            val.modern_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "NAVY":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.navy_availability = 'Y'
                                            break;
                                        case 1:
                                            val.navy_price = product.price
                                            break;
                                        case 2:
                                            val.navy_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "PENTAGON":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.pentagon_availability = 'Y'
                                            break;
                                        case 1:
                                            val.pentagon_price = product.price
                                            break;
                                        case 2:
                                            val.pentagon_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "RGD LIGHTS":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.rgdlights_availability = 'Y'
                                            break;
                                        case 1:
                                            val.rgdlights_price = product.price
                                            break;
                                        case 2:
                                            val.rgdlights_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "RGD RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.rgdred_availability = 'Y'
                                            break;
                                        case 1:
                                            val.rgdred_price = product.price
                                            break;
                                        case 2:
                                            val.rgdred_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "TWO MOON LIGHTS":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.twomoonlights_availability = 'Y'
                                            break;
                                        case 1:
                                            val.twomoonlights_price = product.price
                                            break;
                                        case 2:
                                            val.twomoonlights_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "TWO MOON MENTHOL":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.twomoonmenthol_availability = 'Y'
                                            break;
                                        case 1:
                                            val.twomoonmenthol_price = product.price
                                            break;
                                        case 2:
                                            val.twomoonmenthol_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "TWO MOON RED":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.twomoonred_availability = 'Y'
                                            break;
                                        case 1:
                                            val.twomoonred_price = product.price
                                            break;
                                        case 2:
                                            val.twomoonred_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                                case "UNION":
                                    // FOR THE NEXT 3 ITERATIONS PUT IN DATA IN COLUMNS
                                    switch (matchCount) {
                                        case 0:
                                            val.union_availability = 'Y'
                                            break;
                                        case 1:
                                            val.union_price = product.price
                                            break;
                                        case 2:
                                            val.union_packssold = product['packs-sold']
                                            break;
                                    }
                                    break;
                            }
                            matchCount++

                        }
                    })

                    // console.log(this.columns)

                })

                // tempSheet.push(tempVal)
            })

            // console.log(tempSheet)
        },

        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async () => {
                await recordService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        },
        async restore(id) {

            var cb = async () => {
                var inputs = this.data.data.find(el => el.id == id);
                inputs.status_option_id = 1;
                await recordService.update(id, inputs);
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to restore this record?');
        },
        async set_featured$(data) {

            var cb = async () => {

                const response = await featuredItemService.store(data);
                if (response.code == 422) {

                    alertService.failWithMessage('Error', response.errors[0].detail);
                }
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to set this record as featured?');
        },

        async unset_featured$(id) {

            var cb = async () => {

                await featuredItemService.delete(id);
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to remove this record as featured?');
        },

    }

}
