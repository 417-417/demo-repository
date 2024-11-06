 const printerSelect = document.getElementById('printerSelect');
  if (!printerSelect.value.trim()) {
    showError(printerSelect, '请选择一个打印机');
    isValid = false;
  } else {
    clearError(printerSelect);
  }
