import { Document, Packer, Paragraph } from 'docx';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import Compressor from 'compressorjs';

export const convertWordToPdf = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const doc = new Document({
      sections: [{
        properties: {},
        children: [new Paragraph({ text: 'Converted document' })],
      }],
    });
    const pdfBlob = await Packer.toBlob(doc);
    return pdfBlob;
  } catch (error) {
    throw new Error('Word to PDF conversion failed');
  }
};

export const convertExcelToPdf = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);
    
    const doc = new jsPDF();
    let y = 10;
    
    data.forEach((row) => {
      Object.entries(row).forEach(([key, value]) => {
        doc.text(`${key}: ${value}`, 10, y);
        y += 10;
      });
      y += 5;
    });
    
    return doc.output('blob');
  } catch (error) {
    throw new Error('Excel to PDF conversion failed');
  }
};

export const convertPdfToWord = async (file) => {
  // 这里需要使用专门的PDF解析库
  throw new Error('PDF to Word conversion not implemented');
};

export const compressImage = (file, options = {}) => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      maxWidth: 1920,
      maxHeight: 1920,
      ...options,
      success: resolve,
      error: reject,
    });
  });
};

export const batchCompressImages = async (files, options = {}) => {
  const results = [];
  for (const file of files) {
    try {
      const compressed = await compressImage(file, options);
      results.push({
        original: file,
        compressed,
        success: true,
      });
    } catch (error) {
      results.push({
        original: file,
        error,
        success: false,
      });
    }
  }
  return results;
};

export const batchRenameImages = (files, pattern) => {
  return files.map((file, index) => {
    const extension = file.name.split('.').pop();
    const newName = pattern.replace('[index]', index + 1);
    return new File([file], `${newName}.${extension}`, { type: file.type });
  });
}; 