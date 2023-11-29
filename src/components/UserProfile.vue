<script setup lang="ts"></script>

<template>
  <div>
    <div class="user-container">
      <div>
        <font-awesome-icon icon="fa-regular fa-user fa-2x" />
      </div>
      <div class="user-description">
        <slot name="username">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <div class="time">
          <slot name="time">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
          <slot name="karma">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  margin-left: 20px;
}
.time {
  font-size: 0.7rem;
}
</style>
