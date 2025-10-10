export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  
  // 构建查询字符串
  const queryString = Object.keys(query).length > 0 
    ? '?' + new URLSearchParams(query).toString() 
    : '';
  
  const targetUrl = `http://testtigshop.yufengzhe.cn/apinew.php${queryString}`;
  
  console.log('targetUrl',targetUrl);
  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Referer': 'http://testtigshop.yufengzhe.cn/'
      }
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.text();
    console.log('Response received, length:', data.length);
    
    // 设置正确的响应头
    const contentType = response.headers.get('Content-Type') || 'text/html; charset=utf-8';
    setHeader(event, 'Content-Type', contentType);
    setHeader(event, 'Access-Control-Allow-Origin', '*');
    
    return data;
  } catch (error) {
    console.error('Proxy error:', error);
    throw createError({
      statusCode: error.status || 500,
      statusMessage: `代理请求失败: ${error.message}`
    });
  }
});
