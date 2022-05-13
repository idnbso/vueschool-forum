<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{ user.name }}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="" />
      </a>

      <p class="destop-only text-small">{{ userPostCount }} posts</p>
    </div>

    <div class="post-content">
      <div>
        {{ post.text }}
      </div>
    </div>

    <AppDate :timestamp="post.publishedAt"/>
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
    post: {
      required: true,
      type: Object
    }
  },

  computed: {
    user () {
      return sourceData.users[this.post.userId]
    },

    userPostCount () {
      const postIds = this.user.posts
      const postIdsArray = Object.keys(postIds)
      return postIdsArray.length
    }
  }
}
</script>

<style scoped></style>
