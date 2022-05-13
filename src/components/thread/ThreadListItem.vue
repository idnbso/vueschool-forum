<template>
  <div>
    <div class="thread">
      <div>
        <p>
          <router-link
            :to="{ name: 'ThreadShow', params: { id: thread['.key'] } }"
            >{{ thread.title }}</router-link
          >
        </p>
        <p class="text-faded text-xsmall">
          By <a href="#">{{ user.name }}</a>, <AppDate :timestamp="thread.publishedAt" />.
        </p>
      </div>

      <div class="activity">
        <p class="replies-count">{{ repliesCount }} replies</p>

        <!-- <img src="" alt="" class="avatar-medium" /> -->
        <!-- 
          <div>
              <p class="text-small">
                  <a href="#">Bruce Wayne</a>
              </p>
              <p class="text-xsmall text-faded">2 hours ago</p>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data'
import AppDate from '../app/AppDate'

export default {
  components: {
    AppDate
  },

  props: {
    thread: {
      required: true,
      type: Object
    }
  },

  computed: {
    repliesCount () {
      return Object.keys(this.thread.posts).length - 1
    },
    user () {
      return sourceData.users[this.thread.userId]
    }
  }
}
</script>

<style scoped></style>
