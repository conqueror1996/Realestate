import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
    value?: string;
    onChange: (val: string) => void;
    label: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, label }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const inputId = `upload-${label.replace(/\s/g, '')}`;

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer relative overflow-hidden"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => onChange(reader.result as string);
                        reader.readAsDataURL(file);
                    }
                }}
                onClick={() => fileInputRef.current?.click()}
            >
                {value ? (
                    <img src={value} alt="Preview" className="h-32 object-cover rounded shadow-sm" />
                ) : (
                    <>
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                            <Upload size={20} className="text-[#1A71B7]" />
                        </div>
                        <p className="text-sm text-gray-600">Drag & Drop or Click to Upload</p>
                    </>
                )}
                <input
                    id={inputId}
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => onChange(reader.result as string);
                            reader.readAsDataURL(file);
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ImageUpload;
