<template>
  <div>
    <div class="photo">
        <a>
            <img :src="getImgUrl()" alt="photo"/>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Photo',
    props: ['user'],
    methods: {
        getImgUrl() {
            return "https://i.imgur.com/jjYL1U2t.jpg";
        },
    },
}
</script>

<style scoped lang="scss">
    .photo {
        a:focus {
            outline: none;
        }
        img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            display: inline-block;
        }
    }
    img {
        max-width: 100%;
    }
</style>