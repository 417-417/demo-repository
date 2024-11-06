printForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const isValid = validatePrintOptions();

  if (isValid) {
  
    alert('打印任务已发送到打印机');
     window.print();
  }
});

function validatePrintOptions() {
  let isValid = true;

  // 这里可以添加更多的打印选项验证，例如纸张大小、打印范围等

  // 例如，验证是否选择了打印机（假设有一个选择打印机的下拉菜单）
  const printerSelect = document.getElementById('printerSelect');
  if (!printerSelect.value.trim()) {
    showError(printerSelect, '请选择一个打印机');
    isValid = false;
  } else {
    clearError(printerSelect);
  }
