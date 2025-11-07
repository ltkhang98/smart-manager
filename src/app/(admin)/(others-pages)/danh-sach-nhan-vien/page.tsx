import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import NhanVienTable from "./tables_nhanvien";
import ComponentCard from "@/components/common/ComponentCard";

export const metadata: Metadata = {
    title: "SmartTalk - Danh sách nhân viên",
    // other metadata
};

export default function DanhSachNhanVien() {
    return (
        <div>
            <PageBreadcrumb pageTitle="Danh sách nhân sự" />
            <div className="space-y-6">
                <ComponentCard title="Basic Table 1">
                    <NhanVienTable />
                </ComponentCard>
            </div>
        </div>
    );
}