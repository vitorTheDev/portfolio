<script setup>
import { languages } from '../i18n/ui';
import { getLangFromUrl } from '../i18n/utils';

const lang = getLangFromUrl();
const pathname = location.pathname;

</script>
<template>
  <div class="flex flex-row">
    <a :href="(lang === 'en') ? '' : pathname.replace('/pt-br', '')" :class="(lang === 'en') ? 'font-bold' : ''">{{ languages['en'] }}</a>
    <div class="mx-1">/</div>
    <a :href="(lang === 'pt-br') ? '' : `/pt-br${pathname}`" :class="(lang === 'pt-br') ? 'font-bold' : ''">{{ languages['pt-br'] }}</a>
  </div>
</template>
