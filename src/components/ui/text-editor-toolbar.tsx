"use client";

import { Button } from "antd";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  ImageIcon,
  Italic,
  Link,
  List,
  ListOrdered,
  Minus,
  Plus,
  Printer,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
  X,
  IndentDecrease,
  IndentIncrease,
} from "lucide-react";

export default function TextEditorToolbar({ short }: { short?: boolean }) {
  return (
    <div
      className={`mx-auto h-[64px] ${
        short ? "" : "border-b"
      } border-gray-200 flex justify-center items-center px-4 gap-2 bg-white`}
    >
      {/* Undo/Redo/Print Group */}
      <div className="flex gap-1 border-r border-gray-200 pr-2">
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Undo2 className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Redo2 className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Printer className="w-4 h-4" />}
        />
      </div>

      {/* Font Controls */}
      <div
        className={`${
          short ? "hidden" : "flex"
        } gap-1 border-r border-gray-200 pr-2`}
      >
        <Button
          type="text"
          className="flex items-center justify-center gap-1 min-w-[80px]"
        >
          Arial
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      {/* Font Size Controls */}
      <div
        className={`${
          short ? "hidden" : "flex"
        }  gap-1 border-r border-gray-200 pr-2`}
      >
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Minus className="w-4 h-4" />}
        />
        <Button type="text" className="flex items-center justify-center px-2">
          00
        </Button>
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Plus className="w-4 h-4" />}
        />
      </div>

      {/* Text Formatting */}
      <div className="flex gap-1 border-r border-gray-200 pr-2">
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Bold className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Italic className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Underline className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Strikethrough className="w-4 h-4" />}
        />
      </div>

      {/* Text Color */}
      <div className="flex gap-1 border-r border-gray-200 pr-2">
        <Button type="text" className="flex items-center justify-center gap-1">
          <div className="w-4 h-4 bg-blue-500 rounded" />
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      {/* Alignment */}
      <div className="flex gap-1 border-r border-gray-200 pr-2">
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<AlignLeft className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<AlignCenter className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<AlignRight className="w-4 h-4" />}
        />
      </div>

      {/* Link & Image */}
      <div
        className={`${
          short ? "hidden" : "flex"
        }  gap-1 border-r border-gray-200 pr-2`}
      >
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<Link className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<ImageIcon className="w-4 h-4" />}
        />
      </div>

      {/* Lists */}
      <div className="flex gap-1 border-r border-gray-200 pr-2">
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<List className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<ListOrdered className="w-4 h-4" />}
        />
      </div>

      {/* Indentation */}
      <div className="flex gap-1 border-r border-gray-200 pr-2">
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<IndentDecrease className="w-4 h-4" />}
        />
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<IndentIncrease className="w-4 h-4" />}
        />
      </div>

      {/* Clear Formatting */}
      <div className="flex gap-1">
        <Button
          type="text"
          className="flex items-center justify-center"
          icon={<X className="w-4 h-4" />}
        />
      </div>
    </div>
  );
}
