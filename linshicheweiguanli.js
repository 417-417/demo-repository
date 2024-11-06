// 获取表单元素
const parkingForm = document.getElementById('parkingSpaceManagementForm');
const spaceNumberInput = document.getElementById('spaceNumber');
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');

// 提交事件监听器
parkingForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 阻止默认提交

  // 表单验证
  const isValid = validateForm();

  if (isValid) {
    // 表单验证通过，提交表单
    alert('车位管理操作成功');
    // 这里可以添加实际的车位管理逻辑，例如发送请求到服务器
    // parkingForm.submit(); // 如果需要提交表单，可以取消注释
  }
});

// 表单验证函数
function validateForm() {
  let isValid = true;

  // 验证车位编号（必填）
  if (!spaceNumberInput.value.trim()) {
    showError(spaceNumberInput, '车位编号不能为空');
    isValid = false;
  } else {
    clearError(spaceNumberInput);
  }

  // 验证开始时间（必填）
  if (!startTimeInput.value.trim()) {
    showError(startTimeInput, '开始时间不能为空');
    isValid = false;
  } else {
    clearError(startTimeInput);
  }

  // 验证结束时间（必填，且不早于开始时间）
