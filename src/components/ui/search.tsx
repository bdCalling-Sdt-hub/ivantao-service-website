"use client";
import { getFetcher } from "@/lib/simplifier";
import { Category } from "@/types/Services";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { Loader2, SearchIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";

export default function Search({
  func,
  className,
  ...props
}: {
  func?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) {
  const [search, setSearch] = useState<string>("");
  const [cookies] = useCookies(["raven"]);
  const [results, setResults] = useState<Category[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Improved debouncing with useEffect cleanup
  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const debounceTimer = setTimeout(async () => {
      try {
        const call = await getFetcher({
          link: `/get-all-category?search=${encodeURIComponent(search.trim())}`,
          token: cookies.raven,
        });

        if (!call.status) {
          setResults([]);
        } else {
          setResults(call.data.data || []);
        }
      } catch (error) {
        console.error(error);

        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500); // Reduced from 1000ms to 500ms for better responsiveness

    return () => clearTimeout(debounceTimer);
  }, [search, cookies.raven]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        inputRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    // Arrow down
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    }
    // Arrow up
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
    // Enter
    else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      // Handle selection - you can add your logic here
      console.log("Selected:", results[selectedIndex]);
    }
    // Escape
    else if (e.key === "Escape") {
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  // Handle result item click
  const handleResultClick = (item: Category) => {
    // Add your selection logic here
    console.log("Clicked:", item);
    setIsFocused(false);
  };

  return (
    <div
      className={`px-6 lg:px-0 lg:pl-8 w-full flex flex-row justify-between items-center ${className}`}
      {...props}
    >
      <div className="relative w-full md:w-full px-4 py-2 rounded-full flex flex-row justify-between items-center bg-[#F0E8FF]">
        <input
          ref={inputRef}
          placeholder="Search"
          className="w-full outline-none bg-transparent"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
        />
        <div className="text-gray-500">
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <SearchIcon className="h-5 w-5" />
          )}
        </div>

        {/* Search results dropdown - only visible when focused and has input */}
        {isFocused && search.trim() && (
          <div
            id="search-results"
            ref={resultsRef}
            className="absolute top-[42px] rounded-xl left-0 w-full bg-[#F0E8FF] border z-50 overflow-hidden shadow-md"
          >
            {isLoading ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                Searching...
              </div>
            ) : results.length > 0 ? (
              results.map((item: Category, index) => (
                <div
                  className={`hover:bg-black/5 p-4 cursor-pointer ${
                    selectedIndex === index ? "bg-black/5" : ""
                  }`}
                  key={item.id}
                  onClick={() => handleResultClick(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  role="option"
                  aria-selected={selectedIndex === index}
                >
                  <Link href={`/service/categories/${item.id}`}>
                    <Title level={5}>{item.name}</Title>
                    <p className="line-clamp-1 text-ellipsis text-sm text-muted-foreground">
                      {item.subcategories.map((i, index) => (
                        <span key={i.id} className="">
                          {i.name}{" "}
                          {item.subcategories.length - 1 == index ? "" : ","}{" "}
                        </span>
                      ))}
                    </p>
                  </Link>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No results found
              </div>
            )}
          </div>
        )}
      </div>

      {func ? (
        <div className="flex md:hidden ml-8 flex-shrink-0">
          <Button
            shape="circle"
            className="z-50"
            onClick={() => func(false)}
            onTouchStart={(e) => e.stopPropagation()}
            aria-label="Close search"
          >
            <CloseOutlined />
          </Button>
        </div>
      ) : null}
    </div>
  );
}
