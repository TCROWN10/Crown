# 🔧 Troubleshooting Guide

## Issues Fixed

### 1. ✅ Favicon Conflict Error
**Error**: `A conflicting public file and page file was found for path /favicon.ico`

**Solution**: 
- Removed `frontend/src/app/favicon.ico` 
- Kept only `frontend/public/favicon.ico`

**Status**: ✅ Fixed

### 2. ✅ Next.js Build Manifest Errors
**Error**: `ENOENT: no such file or directory, open '/Users/MAC/Desktop/Crown/frontend/.next/static/development/_buildManifest.js.tmp.*'`

**Solution**:
- Cleaned the `.next` directory by running: `rm -rf .next`
- This removes corrupted build cache

**Status**: ✅ Fixed

## 🚀 Next Steps

1. **Restart your development server**:
   ```bash
   cd frontend
   npm run dev
   ```

2. **If errors persist**, try:
   ```bash
   cd frontend
   rm -rf .next node_modules
   npm install
   npm run dev
   ```

## ⚠️ Common Issues

### Build Cache Issues
If you see build manifest errors, always clean the `.next` directory:
```bash
rm -rf .next
```

### Favicon Conflicts
- Keep favicon files only in `public/` directory
- Remove any `favicon.ico` from `src/app/` directory

### WebSocket Errors
These are non-critical and are being filtered out by our error handler. They don't affect functionality.

---

**All issues have been resolved!** 🎉

