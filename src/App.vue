<script setup></script>

<template>
  <div>
    <h1>Mijn Boodschappenlijst</h1>

    <nav>
      <router-link to="/">Overzicht</router-link>
      <router-link to="/create">Toevoegen</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped></style>
