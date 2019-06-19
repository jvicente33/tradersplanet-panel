<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <!-- <span class="text-uppercase page-subtitle">Components</span> -->
        <h3 class="page-title">Publicaciones</h3>
      </div>
    </div>

    <!-- First Row of Posts -->
    <d-row>
      <d-col v-for="(post, idx) in postAll" :key="idx" lg="3" md="6" sm="12" class="mb-4">
        <d-card class="card-small card-post card-post--1">
          <div
            class="card-post__image"
            :style="{ backgroundImage: 'url(\'' + post.backgroundImage + '\')' }"
          >
            <d-badge
              pill
              :class="['card-post__category', 'bg-' + post.categoryTheme ]"
            >{{ post.public }}</d-badge>
            <div class="card-post__author d-flex">
              <a
                class="card-post__author-avatar card-post__author-avatar--small"
                :style="{ backgroundImage: 'url(\'' + post.authorAvatar + '\')' }"
              ></a>
            </div>
          </div>
          <d-card-body>
            <h5 class="card-title">
              <a class="text-fiord-blue">{{ post.title.substring(0,15) }}</a> -
              <span class="text-muted">{{ post.date }}</span>
            </h5>
            <p class="card-text d-inline-block mb-3">{{ post.content }}... </p> 
            <a style="color: blue;" @click="showMore(post.title, post.contentFull)">Ver más.</a>
            <br>
            <span class="text-muted">Escrito por: {{ post.author }}</span>
          </d-card-body>
          <d-card-footer>
            <d-button size="md" class="col-6 btn-danger" @click="deletePost(post.id)">
              <i class="material-icons">clear</i> Eliminar
            </d-button>
            <d-button size="md" class="col-6" @click="editPost(post.id)">
              <i class="material-icons">create</i> Editar
            </d-button>
          </d-card-footer>
        </d-card>
      </d-col>
    </d-row>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>
  </d-container>
</template>

<script>
import axios from "../config/axios.js";

// First Row of Posts
const PostsListOne = [
  {
    backgroundImage: require("@/assets/images/default-image.png"),
    public: "Business",
    categoryTheme: "info",
    author: "Anna Kunis",
    authorAvatar: require("@/assets/images/avatars/admin.png"),
    title: "Conduct at an replied removal an amongst",
    content:
      "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
    date: "28 February 2019"
  }
];

export default {
  data() {
    return {
      PostsListOne,
      postAll: [],
      isLoading: false,
      isFullPage: true
    };
  },
  created() {
    this.isLoading = true
    this.listPost();
  },
  methods: {
    async listPost() {
      try {
        let posts = await axios.post("/post/all", {});
        let temp = posts.data.posts.map(function(post) {
          return {
            backgroundImage: require("@/assets/images/default-image.png"),
            public: post.public ? "Publico" : "Privado",
            categoryTheme: post.public ? "info" : "dark",
            author: post.author,
            authorAvatar: require("@/assets/images/avatars/majo.png"),
            title: post.title,
            content: post.contentText.toString().substring(0, 20),
            contentFull: post.contentText,
            date: post.createdAt.toString().substring(0, 10),
            id: post._id
          };
        });
        this.postAll = temp;
        this.isLoading = false
      } catch (error) {
        console.log(error);
        this.isLoading = false
        this.$toast.open({
            message: `Error al consultar publicaciones`,
            type: `is-danger`,
            position: "is-bottom"
          })
      }
    },
    deletePost(idPost) {
      this.$dialog.confirm({
        message: "¿Estas seguro de eliminar la publicación?",
        cancelText: "Cancelar",
        confirmText: "Eliminar",
        type: "is-danger",
        onConfirm: () =>
          this.$toast.open({
            message: `Eliminar ${idPost}`,
            type: `is-danger`,
            position: "is-bottom"
          })
      });
    },
    editPost(idPost) {
      this.$dialog.confirm({
        message: "¿Estas seguro de editar la publicación?",
        cancelText: "Cancelar",
        confirmText: "Editar",
        type: "is-info",
        onConfirm: () =>
          this.$toast.open({
            message: `Editar ${idPost}`,
            type: `is-info`,
            position: "is-bottom"
          })
      });
    },
    showMore(title, content){
      this.$dialog.confirm({
          title,
          message: content
      })
    }
  }
};
</script>

