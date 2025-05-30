import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Upload, Button, UploadFile, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { api } from '../../config/axios';
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/dkpfaleot/image/upload";

interface IProduct {
  id?: string;
  name: string;
  images: string;
  price: number;
  galleries?: string[];
}

const ProductEdit = () => {
  const [gallery, setGallery] = useState<string[]>([]);
  const { register, handleSubmit, reset } = useForm<IProduct>();
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<IProduct>({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await api.get(`products/${id}`);
      return data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      reset(data);
      setGallery(data.galleries || []);
    }
  }, [data, reset]);

  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await api.put(`products/${id}`, product);
      return data;
    },
    onSuccess: () => {
      alert('Cập nhật thành công');
      queryClient.invalidateQueries({ queryKey: ['products'] });
      navigate('/dashboard/product-list');
    },
    onError: (error: Error) => {
      alert(`Cập nhật thất bại: ${error.message}`);
    },
  });

  const onSubmit = (product: IProduct) => {
    mutation.mutate({ ...product, galleries: gallery });
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    const newGallery = newFileList
      .map(item => item.response?.url ?? item.url)
      .filter((url): url is string => !!url);
    setGallery(newGallery);
  };

  const fileList: UploadFile[] = data?.galleries?.map((item, index) => ({
    uid: index.toString(),
    name: item,
    status: 'done',
    url: item,
    thumbUrl: item,
  })) || [];

  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sửa sản phẩm</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 [&_input]:border [&_input]:px-3 [&_input]:py-2 [&_input]:rounded"
      >
        <input
          type="text"
          {...register('name', { required: true })}
          placeholder="Tên sản phẩm"
          defaultValue={data?.name}
        />
        <input
          type="text"
          {...register('images', { required: true })}
          placeholder="Ảnh sản phẩm"
          defaultValue={data?.images}
        />
        <input
          type="number"
          {...register('price', { required: true, valueAsNumber: true })}
          placeholder="Giá sản phẩm"
          defaultValue={data?.price}
        />
        <Upload
          action={UPLOAD_URL}
          listType="picture"
          defaultFileList={fileList}
          data={{ upload_preset: 'reacttest' }}
          onChange={handleChange}
          multiple
        >
          <Button type="primary" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
        <Button type="primary" htmlType="submit">
          Sửa
        </Button>
      </form>
    </div>
  );
};

export default ProductEdit;