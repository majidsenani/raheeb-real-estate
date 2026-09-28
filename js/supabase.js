/* =========================================================
   Supabase — الاتصال والإعدادات
   ========================================================= */

/* 🔑 مفاتيح Supabase */
const SUPABASE_URL = 'https://cvnunhxzmvwnqdmgxnwu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ZN1YR0IZHurmaPOB7n7T5A_Qncq3bc0';
const STORAGE_BUCKET = 'raheeb-real-estate';

/* =========================================================
   دوال الاتصال — REST API
   ========================================================= */

async function sbSelect(table){
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=*&order=created_at.desc`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  if(!res.ok) throw new Error('فشل في جلب البيانات');
  return await res.json();
}

async function sbInsert(table, row){
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(row)
  });
  if(!res.ok) throw new Error('فشل في الإضافة');
  return await res.json();
}

async function sbUpdate(table, id, updates){
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(updates)
  });
  if(!res.ok) throw new Error('فشل في التعديل');
  return await res.json();
}

async function sbDelete(table, id){
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: 'DELETE',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  if(!res.ok) throw new Error('فشل في الحذف');
  return true;
}

async function sbUpload(file){
  const ext = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
  const path = `${fileName}`;

  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${path}`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': file.type,
      'x-upsert': 'true'
    },
    body: file
  });

  if(!res.ok){
    const err = await res.text();
    console.error('Upload error:', err);
    throw new Error('فشل في رفع الصورة');
  }

  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${path}`;
}

async function sbDeleteFile(url){
  const prefix = `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/`;
  if(!url.startsWith(prefix)) return false;
  const path = url.substring(prefix.length);

  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${path}`, {
    method: 'DELETE',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  return res.ok;
}
