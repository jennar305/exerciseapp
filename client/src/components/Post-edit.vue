<template>
    <form class="card" @submit.prevent="$emit('add')">
        <div class="card-content">
            <div class="content">
                <div class="field">
                    <label class="label">Picture</label>
                    <div class="control">
                        <input class="input" type="url" placeholder="Input a URL to a picture" v-model="post.src" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Alt</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Some alternate text for this picture" v-model="post.alt" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Caption</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Some text to explain this picture" v-model="post.caption"></textarea>
                    </div>
                </div>

                <div class="field">
                    <label class="label"> Tag a Friend </label>
                    <div class="control">
                        <o-autocomplete rounded expanded v-model="name" :data="filteredDataArray" placeholder="friends" icon="search" clearable @select="option => selected = option">
                            <template v-slot:empty> No results found </template>
                        </o-autocomplete>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" v-model="post.isPublic" :value="true" />
                            Public
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="post.isPublic" :value="false" />
                            Private
                        </label>
                    </div>
                </div>

            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link card-footer-item" type="submit">Submit</button>
            <button class="button is-link is-light card-footer-item" type="reset">Cancel</button>

        </footer>
    </form>
</template>

<script>

export default {
    props: {
        newPost: Object
    },
    data(){
        return {
            post: this.newPost,
            data: ['Angular', 'Angular 2', 'Aurelia', 'Backbone', 'Ember', 'jQuery', 'Meteor', 'Node.js', 'Polymer', 'React', 'RxJS', 'Vue.js'],
            name: '',
            selected: null
        }
    },
    watch: {
        newPost(){
            this.post = this.newPost;
        }
    },
    computed: {
      filteredDataArray() {
        return this.$data.filter(option => {
          return (
            option
              .toString()
              .toLowerCase()
              // @ts-ignore
              .indexOf(this.name.toLowerCase()) >= 0
          )
        })
      }
    }
}
</script>

<style>
</style>