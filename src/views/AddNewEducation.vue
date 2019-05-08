<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Nueva Educación</h3>
      </d-col>
    </d-row>

    <d-row>
      <!-- Editor -->
      <d-col lg="12" md="12">
        <d-card class="card-small mb-3">
          <d-card-body>
            <d-form>
              <d-form-row>
                <d-col md="6" class="form-group">
                  <label>Titulo</label>
                  <d-input type="text" placeholder="Ej: Curso de Opciones"/>
                </d-col>
                <d-col md="6">
                  <label>Tutor</label>
                  <d-input type="text" placeholder="Ej: P. Sanchez"/>
                </d-col>
              </d-form-row>

              <div class="form-group">
                <label>Descripción</label>
                <div ref="desceditor"></div>
              </div>

              <div class="form-group">
                <label>Contenido</label>
                <div ref="conteditor"></div>
              </div>

              <d-form-row>
                <d-col md="8" class="form-group">
                  <label>Publicar el Curso</label>
                  <d-checkbox>Publicar</d-checkbox>
                </d-col>
                <d-col md="4">
                  <label>Precio del Curso</label>
                  <d-input-group prepend="$" append=".00" class="mb-3">
                    <d-input value="1000"/>
                  </d-input-group>
                </d-col>
              </d-form-row>

              <d-button type="submit">Crear curso</d-button>
            </d-form>
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
  components: {},
  mounted() {
    this.initQuill();
  },
  methods: {
    initQuill() {
      const toolbarOptions = [
        ["bold", "italic", "underline", "strike"],
        [{ align: [] }]
      ];

      // Init the Quill RTE
      this.editor = new Quill(this.$refs.desceditor, {
        modules: {
          toolbar: toolbarOptions
        },
        placeholder: "Ej: Curso de opciones financieras...",
        theme: "snow",
        readOnly: false
      });

      this.editor2 = new Quill(this.$refs.conteditor, {
        modules: {
          toolbar: toolbarOptions
        },
        placeholder: "Ej: Este curso obtendra muchas caracteristicas..",
        theme: "snow",
        readOnly: false
      });
    },
    getContentQuill() {
      /*let content = this.editor.getContents();
      this.editor2.setContents(content)*/
    }
  }
};
</script>
