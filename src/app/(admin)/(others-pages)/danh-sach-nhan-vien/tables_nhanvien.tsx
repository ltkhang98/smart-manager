"use client"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Modal_Add_User from './modal_add';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullname', headerName: 'Họ và tên', width: 200 },
  { field: 'phong_ban', headerName: 'Phòng Ban', width: 200 },
  { field: 'chuc_vu', headerName: 'Chức vụ', width: 200 },
  { field: 'so_dien_thoai', headerName: 'Số điện thoại', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
];

const rows = [
  { id: 1, fullname: 'Phạm Văn A', phong_ban: 'Kinh Doanh', chuc_vu: 'Trưởng phòng', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 2, fullname: 'Lò Văn B', phong_ban: 'Kinh Doanh', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 3, fullname: 'Phùng Thị C', phong_ban: 'Kinh Doanh', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 4, fullname: 'Hà Thu D', phong_ban: 'Hành Chính Nhân Sự', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 5, fullname: 'Lê Nguyễn E', phong_ban: 'Hành Chính Nhân Sự', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 6, fullname: 'Nguyễn Văn F', phong_ban: 'Marketing', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 7, fullname: 'Nguyễn Hữu G', phong_ban: 'Kế Toán', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 8, fullname: 'Phùng Văn Hán', phong_ban: 'Kế Toán', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 9, fullname: 'Hàn Tiểu Nhi', phong_ban: 'Kế Toán', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 10, fullname: 'Lưu Hoành Bá', phong_ban: 'Giáo viên', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 11, fullname: 'Phạm Băng Di', phong_ban: 'Giáo viên', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
  { id: 12, fullname: 'Trần Trịnh Tố Như', phong_ban: 'Giáo viên', chuc_vu: 'Nhân viên', so_dien_thoai: '0944478765', email: 'example@gmail.com' },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function NhanVienTable() {
  return (
    <>
      <Modal_Add_User />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
