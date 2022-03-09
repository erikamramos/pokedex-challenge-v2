<template>
    <div class="overlay loader load" v-if="$store.state.loader">
        <img class="img__loader img__loading" src="@/assets/loader.png">
    </div>
</template>
<style scoped>
.overlay {
    display: none;
    position: fixed;
    z-index: 1; 
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; 
}
.loader{
    position: absolute;
}
.load{
    display: block;
    text-align: center;
    padding: 0;
    background-color: rgb(255 255 255 );
}

.img__loader{
    margin: auto;
    animation: loading 2s infinite;
}
.img__loading{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>