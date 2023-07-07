<template>
  <div>
    <!-- 첫 번째 모달 버튼 -->
    <button @click="openModal1">첫 번째 모달 열기</button>

    <!-- 첫 번째 모달 -->
    <div class="modal" v-if="isModal1Open">
      <div class="modal-content">
        <!-- 첫 번째 모달 내용 -->
        <h2>첫 번째 모달</h2>
        <p>첫 번째 모달 내용</p>

        <!-- 두 번째 모달 버튼 -->
        <button @click="openModal2">두 번째 모달 열기</button>

        <!-- 첫 번째 모달 닫기 버튼 -->
        <button @click="closeModal1">닫기</button>
      </div>
    </div>

    <!-- 두 번째 모달 -->
    <div class="modal" v-if="isModal2Open">
      <div class="modal-content">
        <!-- 두 번째 모달 내용 -->
        <h2>두 번째 모달</h2>
        <p>두 번째 모달 내용</p>

        <!-- 두 번째 모달 닫기 버튼 -->
        <button @click="closeModal2">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModal1Open: false, // 첫 번째 모달의 표시 여부를 나타내는 상태 변수
      isModal2Open: false, // 두 번째 모달의 표시 여부를 나타내는 상태 변수
    };
  },
  methods: {
    openModal1() {
      this.isModal1Open = true;
    },
    closeModal1() {
      this.isModal1Open = false;
    },
    openModal2() {
      this.isModal2Open = true;
    },
    closeModal2() {
      this.isModal2Open = false;
    },
  },
};
</script>

<style>
.modal {
  /* 모달을 화면 정중앙에 배치하기 위한 스타일 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 그 외 모달 스타일 */
  width: 400px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1000; /* 다른 요소보다 높은 z-index 값을 설정하여 가장 위에 표시 */
}

.modal-content {
  margin-bottom: 20px;
}
</style>
