<template>
  <div class="card">
    <div class="card-body">

      <h3 class="mt-4 mb-4">General Information</h3>
      <div class="row mb-4">
        <div class="col-lg-6 col-12">
          <div class="form-group">
            <label for="firstname">Name: {{ data.store_name }}</label> <br />
            <label for="firstname">Store Owner: {{ data.store_owner_name }}</label> <br />
            <label for="firstname">Area: {{ data.store_branch }}</label> <br />
            <label for="firstname">Street: {{ data.street }}</label> <br />
            <label for="firstname">Town/City: {{ data.town_city }}</label> <br />
            <label for="firstname"
              >Contact Number: {{ data.contact_number }}</label
            >
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="form-group">
            <label for="lastname">Banner: {{ data.banner }}</label><br />
            <label for="firstname">Cash Mat: {{ data.cash_mat }}</label><br />
            <label for="firstname">Poster: {{ data.poster }}</label><br />
            <label for="firstname">Grill Taler: {{ data.grill_talker }}</label><br />
            <label for="firstname">Signature: {{ data.store_signage }}</label><br />
            <label for="firstname">Wall Sticker: {{ data.wall_sticker }}</label><br />
            <label for="firstname">Flange: {{ data.flange }}</label>

          </div>
        </div>
      </div>

      <h3 class="mt-4 mb-4">Cigarette Variants</h3>
      <div class="column" style="display: flex">
        <b-card-group deck>
          <div v-for="(item, key) in data.products[0]" :key="item.id">
            <div>
              <b-card
                img-src="/img/cigarrete_pack.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 12rem"
                class="mb-2"
              >
                <b-card-text>
                  {{ item.title }} <br />
                  Price: {{ item.price }} <br />
                  Packs Sold Per Week: {{ item['packs-sold'] }} <br />
                  Availability: {{ item.availability }} <br />

                </b-card-text>
              </b-card>
            </div>
          </div>
        </b-card-group>
      </div>


      <h3 class="mt-4 mb-4">Images</h3>
      <div class="column" style="display: flex">
        <b-card-group deck>
          <div v-for="(item, key) in images.data" :key="item.id">
            <div>
              <b-card
                :img-src="'data:image/jpeg;base64,' + item.img_blob"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <b-card-text>
                  Filename: {{ item.title }} <br />
                  Created At: {{ item.created_at }}
                </b-card-text>

                <b-button href="#" variant="danger">Download</b-button>
              </b-card>
            </div>
          </div>
        </b-card-group>
      </div>


      <h3 class="mt-4 mb-4">Reporter Information</h3>
      <div class="row mb-4">
        <div class="col-lg-6 col-12">
          <div class="form-group">
            <label for="firstname">id: {{ data.report_by.id }}</label><br />
            <label for="firstname">Reported by: {{ data.report_by.name }}</label> <br />
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="form-group">
            <label for="lastname">Latitude: {{ data.lat }}</label><br />
            <label for="firstname">Longitude: {{ data.long }}</label><br />
          </div>
        </div>
      </div>

      <!-- <h3 class="mt-4 mb-4">Event Schedule</h3> -->
      <button
        type="button"
        class="btn btn-danger mr-3 float-right"
        @click="cancel"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script src="./form.component.js"></script>
