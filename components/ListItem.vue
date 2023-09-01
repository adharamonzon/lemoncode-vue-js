import { OrganizationApiResponse } from '../types/index';
<template>
  <h3 class="list-container__item--name" >{{ member.login }}</h3>
  <div class="list-container__item--img-container" >
    <img class="img" :src="member.avatar_url" alt="photo" />
  </div>
</template>

<script setup lang="ts">

</script>

<styles>

</styles>