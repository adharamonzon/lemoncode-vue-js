import { NuxtLink } from '../.nuxt/components';
<template>
  <section class="list-container">
    <h3 class="list-container__title">Github list members:</h3>
    <ul class="list-container__list">
      <li class="list-container__item" v-for="member in membersList" :key="member.id">
        <NuxtLink>
          <ListItem :member="member"/>
        </NuxtLink>
        
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  import { OrganizationApiResponse } from '~/types';

  const  membersList: OrganizationApiResponse = await useOrganizationApi()
</script>

<styles lang="scss" scoped>
  .list-container {
    margin: 30px;
    &__title {
      font-weight: bold;
    }
    &__list {
      list-style-type: none;
      width: fit-content;
      display: grid;
      grid-template-columns: repeat(6, 200px);
      gap: 50px;
      align-self: center;
    }
    &__item {
      margin-bottom: 20px;
      &--name {
        margin: 10px 0;
      }
      &--img-container {
        width: 200px;
        margin-top: 30px;
        .img{
          width: 100%;
        }
      }
    }
  }
</styles>