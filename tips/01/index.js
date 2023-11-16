{
  const doc = document;
  const target = doc.getElementById("target");
  //   テキストを抽出
  const text = target.textContent;
  const limit = 50; // 半角50字（全角約25字）
  if (text.length > limit) {
    target.textContent = text.substring(0, 25) + "…";
  }
  //   25でだいたい18文字くらい
}
