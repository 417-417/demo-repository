class ParkingSpace:
    def __init__(self, space_id, area, status="空闲"):
        self.space_id = space_id
        self.area = area
        self.status = status

    def update_status(self, new_status):
        if new_status in ["空闲", "占用"]:
            self.status = new_status
        else:
            raise ValueError("无效的停车位状态")

    def __repr__(self):
        return f"ParkingSpace(space_id={self.space_id}, area={self.area}, status={self.status})"

class ParkingLot:
    def __init__(self):
        self.spaces = []

    def add_parking_space(self, space_id, area, status="空闲"):
        # 检查是否已存在相同的停车位ID
        for space in self.spaces:
            if space.space_id == space_id:
                raise ValueError(f"停车位ID {space_id} 已存在")
        # 添加新停车位
        new_space = ParkingSpace(space_id, area, status)
        self.spaces.append(new_space)
        return new_space

    def get_parking_space(self, space_id):
        # 根据停车位ID查找停车位信息
        for space in self.spaces:
            if space.space_id == space_id:
                return space
        return None

    def list_all_spaces(self):
        return self.spaces
