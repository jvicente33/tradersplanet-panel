<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Nueva Publicación</h3>
      </d-col>
    </d-row>

    <d-row>
      <!-- Editor -->
      <d-col lg="9" md="12">
        <d-card class="card-small mb-3">
          <d-card-body>
            <d-form class="add-new-post">
              <d-input size="lg" class="mb-3" placeholder="Titulo del Artículo"/>
              <div ref="editor" class="add-new-post__editor mb-1"></div>
            </d-form>
          </d-card-body>
        </d-card>
      </d-col>

      <!-- Sidebar Widgets -->
      <d-col lg="3" md="12">
        <d-card class="card-small mb-3">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Detalles</h6>
          </d-card-header>

          <d-card-body class="p-0">
            <d-list-group flush>
              <d-list-group-item class="p-3">
                <span class="d-flex mb-2">
                  <i class="material-icons mr-1">flag</i>
                  <strong class="mr-1">Status:</strong>
                  <strong class="text-success">Activo</strong>
                </span>
                <span class="d-flex mb-2">
                  <i class="material-icons mr-1">visibility</i>
                  <strong class="mr-1">Visibility:</strong>
                  <strong class="text-success">Public</strong>
                  <!--<a class="ml-auto" href="#">Edit</a>-->
                </span>
              </d-list-group-item>

              <d-list-group-item class="d-flex px-3">
                <d-button size="sm" class="btn-outline-accent">
                  <i class="material-icons">save</i> Guardar
                </d-button>

                <d-button size="sm" class="btn-accent ml-auto">
                  <i class="material-icons">file_copy</i> Publicar
                </d-button>
              </d-list-group-item>
            </d-list-group>
          </d-card-body>
        </d-card>

        <d-card class="card-small mb-3">
          <!-- Card Header -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Etiquetas</h6>
          </d-card-header>

          <d-card-body class="p-0">
            <d-list-group flush>
              <!-- Categories -->
              <d-list-group-item class="px-3 pb-2">
                <d-checkbox class="mb-1" value="uncategorized">Trading</d-checkbox>
                <d-checkbox class="mb-1" value="design">Diseño</d-checkbox>
                <d-checkbox class="mb-1" value="development">Entretenimiento</d-checkbox>
                <d-checkbox class="mb-1" value="writing">Deporte</d-checkbox>
                <d-checkbox class="mb-1" value="books">Redes</d-checkbox>
              </d-list-group-item>

              <!-- Add New Category -->
              <d-list-group-item class="px-3 pb-2">
                <d-input-group class="mb-2">
                  <d-input placeholder="Nueva etiqueta"/>
                  <d-input-group-addon append>
                    <d-button class="btn-white px-2">
                      <i class="material-icons">add</i>
                    </d-button>
                  </d-input-group-addon>
                </d-input-group>
              </d-list-group-item>
            </d-list-group>
          </d-card-body>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import Quill from "quill";

import "quill/dist/quill.snow.css";

export default {
  data() {
    return {
      editor: "",
      editor2: ""
    };
  },
  components: {
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    initQuill() {
      const toolbarOptions = [
        ["bold", "italic", "underline", "strike"],
        [{ align: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }]
      ];

      // Init the Quill RTE
      this.editor = new Quill(this.$refs.editor, {
        modules: {
          toolbar: toolbarOptions
        },
        placeholder: "Escribe tu artículo",
        theme: "snow",
        readOnly: false
      });
      /*this.editor2 = new Quill(this.$refs.editorr, {
        theme: "bubble",
        readOnly: true
      });*/
    },
    getContentQuill() {
      /*let content = this.editor.getContents();
      this.editor2.setContents(content)*/
    }
  }
};
</script>
