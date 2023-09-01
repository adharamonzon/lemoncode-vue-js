<template>
  <header class="header">
    <h1 class="header__title">Welcome to GitHub searcher:</h1>
    <form class="header__form">
      <input class="header__input" type="text" placeholder=" Search Organization">
      <button class="header__btn" type="button" @click="onSearch">Search</button>
    </form>
  </header>
</template>

<script setup lang="ts">
  const onSearch = () => {
    console.log('me han clickado')
  }
</script>

<styles lang="scss" scoped>
  .header {
    margin: 20px;
    &__form {
      margin-top: 20px;
    }
    &__input {
      height: 40px;
      border: none;
      border-bottom: solid 1px black;
      &:focus {
        outline: none;
      }
    }
    &__btn {
      height: 40ox;
      padding: 10px;
      margin-left: 10px;
      border: none;
      border-radius: 5px;
      background-color: lightgreen;
      &:hover {
        background-color: rgb(97, 170, 97);
        color: white;
        transition: ease-in .5s;
      }
    }
  }
</styles>