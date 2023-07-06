<template>
  <div>
    <!-- 모달 버튼 -->
    <button @click="openModal">모달 열기</button>

    <!-- 백드롭 -->
    <div class="backdrop" v-if="isModalOpen"></div>

    <!-- 모달 -->
    <div class="modal" v-if="isModalOpen">
      <div class="modal-content">
        <!-- 모달 내용 -->
        <h2>모달 제목</h2>
        <p>모달 내용</p>

        <!-- 모달 닫기 버튼 -->
        <button @click="closeModal">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 40, 49, 0.5);
  z-index: 998;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 999;
}

.modal-content {
  margin-bottom: 20px;
}
</style>
