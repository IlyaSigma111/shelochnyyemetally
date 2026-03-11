// ═══════════════════════════════════════════════════════════════════════════════════
// ФАЙЛ: config.js
// НАЗНАЧЕНИЕ: Единая конфигурация для подключения к Supabase
// ═══════════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════
// 1. НАСТРОЙКИ ПОДКЛЮЧЕНИЯ К SUPABASE
// ═══════════════════════════════════════════════════
// ВАЖНО: Используйте anon/public ключ, который начинается с "eyJ..."
const SB_URL = 'https://gluqnmznmjvlyguzkdrn.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdXFubXpubWp2bHlndXprZHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MzU5MjAsImV4cCI6MjA1NzIxMTkyMH0.2NgsE4dA-SL1RNCzEf0T79Tk9O3OEMLFJwMh7iyfJXo';

// ═══════════════════════════════════════════════════
// 2. УНИКАЛЬНЫЙ ID ВИКТОРИНЫ
// ═══════════════════════════════════════════════════
const QUIZ_ID = 'alkali_metals_9class';

// ═══════════════════════════════════════════════════
// 3. СОЗДАНИЕ КЛИЕНТА SUPABASE
// ═══════════════════════════════════════════════════
const SB = window.supabase.createClient(SB_URL, SB_KEY);

console.log('✅ Supabase клиент готов');
console.log('📌 ID викторины:', QUIZ_ID);
