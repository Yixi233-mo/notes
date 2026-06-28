
## 一、知识点分区与掌握程度要求
### 🔵 基础概念区 — 要求：熟悉
| 知识点 | 掌握程度 | 核心要义 |
| --- | --- | --- |
| 注释 | **熟悉** | 单行用`#`，多行用三引号，会写会读即可 |
| 变量与赋值 | **精通** | `变量名 = 值`，Python动态类型，变量是标签 |
| 常量 | **熟悉** | 全大写命名是约定，Python无真正常量 |
| 进制表示 | **熟悉** | `0b`二进制、`0o`八进制、`0x`十六进制，面试偶尔问 |


### 🟡 核心机制区 — 要求：理解（面试重点）
| 知识点 | 掌握程度 | 核心机制 |
| --- | --- | --- |
| 变量本质 | **理解** | 变量是对象的引用（标签），赋值是让变量指向新对象 |
| 小整数池 | **理解** | `[-5, 256]`整数预创建共享，面试常问`==`与`is`的区别 |
| type() vs isinstance() | **理解** | `bool`是`int`子类，`isinstance(True, int)`为True，面试考点 |
| 浮点精度 | **理解** | `0.1+0.2!=0.3`，金融计算用`Decimal` |
| 编码与解码 | **理解** | `str.encode()`→bytes，`bytes.decode()`→str，中文UTF-8占3字节 |


### 🟢 工程实践区 — 要求：精通（AI开发日常必备）
| 知识点 | 掌握程度 | 实践场景 |
| --- | --- | --- |
| 变量创建与交换 | **精通** | `a, b = b, a`，数据处理中常用 |
| 变量命名规范 | **精通** | PEP 8蛇形命名，写可读代码的基础 |
| 类型转换 | **精通** | `int()`、`float()`、`str()`，数据处理必备 |
| 进制转换函数 | **精通** | `bin()`、`hex()`、`int(x, base)`，面试手写可能用到 |
| 假值判断 | **精通** | `None`、`0`、`""`、`[]`等，条件判断常用 |
| 空值判断 | **精通** | 用`is None`而非`== None`，面试必考 |
| 字符串编码转换 | **精通** | 读写文件、网络传输时处理编码问题 |


### 🔴 扩展关联区 — 要求：了解
| 知识点 | 掌握程度 | 面试可能会问 |
| --- | --- | --- |
| `is` vs `==` | **了解** | 知道区别：`is`比较身份，`==`比较值 |
| 深浅拷贝 | **了解** | 知道浅拷贝`copy()`和深拷贝`deepcopy()`的区别 |
| 可变与不可变 | **了解** | 知道哪些类型可变/不可变，理解传参影响 |
| 垃圾回收 | **了解** | 知道引用计数，面试偶尔提及 |


## 二、核心技能点（需精通）
1. **精通**：能创建变量并正确赋值
2. **精通**：能用一行代码交换两个变量
3. **精通**：能按PEP 8规范命名变量
4. **精通**：能使用`int()`、`float()`、`str()`进行类型转换
5. **精通**：能使用`bin()`、`oct()`、`hex()`、`int(x, base)`进行进制转换
6. **精通**：能用`is None`判断空值
7. **精通**：能识别所有假值（`None`、`0`、`""`、`[]`、`()`、`{}`、`set()`）
8. **精通**：能进行字符串和字节的编码解码转换



## 三、综合练习
### 入门关（15分钟）
**任务**：补全代码，让每个`print`输出正确结果。

```python
# 第一题：变量赋值与交换
x, y = 5, 10
___  # 交换 x 和 y 的值
print(f"x={x}, y={y}")  # 预期输出: x=10, y=5


# 第二题：多变量赋值
# 创建三个变量 a, b, c，值分别为 1, 2, 3
___
print(a, b, c)  # 预期输出: 1 2 3


# 第三题：类型转换
num_str = "42"
num_int = ___(num_str)  # 转为整数
num_float = ___(num_str)  # 转为浮点数
print(num_int, num_float)  # 预期输出: 42 42.0


# 第四题：进制转换
dec = 255
print(bin(dec))  # 预期输出: ___
print(hex(dec))  # 预期输出: ___
print(int("FF", 16))  # 预期输出: ___


# 第五题：假值判断
values = [0, 1, "", "hello", [], None, False]
false_values = [v for v in values if not v]
print(false_values)  # 预期输出: ___


# 第六题：编码解码
text = "你好"
byte_data = text.___("utf-8")  # 编码
print(len(byte_data))  # 预期输出: ___（中文UTF-8占3字节）
text2 = byte_data.___("utf-8")  # 解码
print(text2)  # 预期输出: ___
```

### 入门关参考答案
```python
# 第一题
x, y = y, x

# 第二题
a, b, c = 1, 2, 3

# 第三题
num_int = int(num_str)
num_float = float(num_str)

# 第四题
print(bin(dec))  # 0b11111111
print(hex(dec))  # 0xff
print(int("FF", 16))  # 255

# 第五题
print(false_values)  # [0, '', [], None, False]

# 第六题
byte_data = text.encode("utf-8")
print(len(byte_data))  # 6
text2 = byte_data.decode("utf-8")
print(text2)  # 你好
```



### 实战关（40分钟）
**任务**：实现一个配置解析器，从文本配置中读取参数并转换类型。

**背景**：AI项目中常从配置文件（如`.env`或`config.txt`）读取超参数，需要将字符串转换为正确的Python类型。

**要求**：

1. 配置文件格式为`key = value`，每行一个配置
2. 实现`parse_config(filepath)`函数，读取并解析配置文件
3. 自动将值转换为合适的类型（int、float、bool、str）
4. 返回字典

**转换规则**：

+ `"true"`/`"false"`（不区分大小写）→ `True`/`False`
+ `"null"` → `None`
+ 纯数字字符串 → `int`
+ 带小数点的数字字符串 → `float`
+ 其他 → `str`

**配置文件示例**（`config.txt`）：

```plain
learning_rate = 0.001
batch_size = 32
epochs = 100
use_cuda = true
model_name = resnet50
pretrained = null
```

**使用示例**：

```python
config = parse_config("config.txt")
print(config)
# {
#   "learning_rate": 0.001,
#   "batch_size": 32,
#   "epochs": 100,
#   "use_cuda": True,
#   "model_name": "resnet50",
#   "pretrained": None
# }

print(config["learning_rate"] + 0.001)  # 0.002
print(config["batch_size"] + 10)  # 42
print(config["use_cuda"] and True)  # True
```

**加分项**：处理注释行（以`#`开头）和空行

### 实战关参考答案
```python
def parse_value(value_str):
    """将字符串值转换为合适的Python类型"""
    value_str = value_str.strip()
    
    # None
    if value_str.lower() == "null":
        return None
    
    # 布尔值
    if value_str.lower() == "true":
        return True
    if value_str.lower() == "false":
        return False
    
    # 整数
    try:
        if "." not in value_str:
            return int(value_str)
    except ValueError:
        pass
    
    # 浮点数
    try:
        return float(value_str)
    except ValueError:
        pass
    
    # 默认字符串
    return value_str


def parse_config(filepath):
    """解析配置文件，返回字典"""
    config = {}
    
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            
            # 跳过空行和注释
            if not line or line.startswith("#"):
                continue
            
            # 解析 key = value
            if "=" in line:
                key, value = line.split("=", 1)
                key = key.strip()
                value = parse_value(value)
                config[key] = value
    
    return config


# 测试
if __name__ == "__main__":
    # 创建配置文件
    config_content = """
    # 模型超参数
    learning_rate = 0.001
    batch_size = 32
    epochs = 100
    use_cuda = true
    model_name = resnet50
    pretrained = null
    """
    
    with open("config.txt", "w", encoding="utf-8") as f:
        f.write(config_content)
    
    config = parse_config("config.txt")
    print(config)
    # 验证类型转换
    print(f"learning_rate类型: {type(config['learning_rate'])}")  # float
    print(f"batch_size类型: {type(config['batch_size'])}")  # int
    print(f"use_cuda类型: {type(config['use_cuda'])}")  # bool
    print(f"pretrained类型: {type(config['pretrained'])}")  # NoneType
```



### 挑战关（60分钟）
**任务**：实现一个轻量级超参数管理器，支持从多种来源加载配置。

**背景**：AI训练中，超参数可能来自配置文件、命令行参数或环境变量，需要统一管理。

**要求**：

1. 实现`Config`类：
    - `__init__(self, **kwargs)`：用关键字参数初始化
    - `load_from_file(filepath)`：从配置文件加载（使用实战关的解析器）
    - `load_from_env(prefix="")`：从环境变量加载（`os.environ`）
    - `get(key, default=None)`：获取参数值
    - `set(key, value)`：设置参数值
    - `to_dict()`：返回所有参数的字典
2. 支持嵌套配置（用点号分隔，如`model.learning_rate`）
3. 优先级：命令行参数 > 配置文件 > 环境变量 > 默认值

**使用示例**：

```python
config = Config(
    learning_rate=0.01,
    batch_size=64,
    epochs=50
)

# 从文件加载（覆盖已有配置）
config.load_from_file("config.txt")

# 从环境变量加载
config.load_from_env(prefix="MY_")

# 获取配置
print(config.get("learning_rate", 0.001))
print(config.get("model.learning_rate", 0.001))

# 导出配置
print(config.to_dict())
```

**思考题**（面试常问）：

```python
a = 256
b = 256
c = 257
d = 257

print(a is b)  # 输出什么？为什么？
print(c is d)  # 输出什么？为什么？

# 答案：True（小整数池），可能False（大整数池）
```

### 挑战关参考答案
```python
import os
import json

def parse_value(value_str):
    """将字符串值转换为合适的Python类型"""
    value_str = value_str.strip()
    if value_str.lower() == "null":
        return None
    if value_str.lower() == "true":
        return True
    if value_str.lower() == "false":
        return False
    try:
        if "." not in value_str:
            return int(value_str)
    except ValueError:
        pass
    try:
        return float(value_str)
    except ValueError:
        pass
    return value_str


def parse_config_file(filepath):
    """解析配置文件，返回字典"""
    config = {}
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, value = line.split("=", 1)
                config[key.strip()] = parse_value(value.strip())
    return config


def merge_dict(base, override):
    """合并字典，override覆盖base"""
    result = base.copy()
    for key, value in override.items():
        if isinstance(value, dict) and key in result and isinstance(result[key], dict):
            result[key] = merge_dict(result[key], value)
        else:
            result[key] = value
    return result


def flatten_dict(d, parent_key="", sep="."):
    """将嵌套字典展平"""
    items = []
    for key, value in d.items():
        new_key = f"{parent_key}{sep}{key}" if parent_key else key
        if isinstance(value, dict):
            items.extend(flatten_dict(value, new_key, sep).items())
        else:
            items.append((new_key, value))
    return dict(items)


def unflatten_dict(d, sep="."):
    """将展平的字典恢复为嵌套结构"""
    result = {}
    for key, value in d.items():
        parts = key.split(sep)
        current = result
        for part in parts[:-1]:
            if part not in current:
                current[part] = {}
            current = current[part]
        current[parts[-1]] = value
    return result


class Config:
    """超参数管理器"""
    
    def __init__(self, **kwargs):
        self._data = {}
        for key, value in kwargs.items():
            self.set(key, value)
    
    def set(self, key, value):
        """设置参数"""
        self._data[key] = value
    
    def get(self, key, default=None):
        """获取参数"""
        # 支持嵌套访问
        if "." in key:
            parts = key.split(".")
            current = self._data
            for part in parts:
                if isinstance(current, dict) and part in current:
                    current = current[part]
                else:
                    return default
            return current
        return self._data.get(key, default)
    
    def load_from_file(self, filepath):
        """从配置文件加载"""
        file_config = parse_config_file(filepath)
        for key, value in file_config.items():
            self.set(key, value)
        return self
    
    def load_from_env(self, prefix=""):
        """从环境变量加载"""
        for key, value in os.environ.items():
            if key.startswith(prefix):
                config_key = key[len(prefix):].lower()
                self.set(config_key, parse_value(value))
        return self
    
    def to_dict(self):
        """导出配置"""
        return self._data.copy()
    
    def __repr__(self):
        return f"Config({self._data})"


# 测试
if __name__ == "__main__":
    # 创建配置文件
    with open("config.txt", "w", encoding="utf-8") as f:
        f.write("""
        # 模型参数
        learning_rate = 0.001
        batch_size = 32
        epochs = 100
        use_cuda = true
        model.name = resnet50
        model.pretrained = true
        """)
    
    # 创建配置实例
    config = Config(
        learning_rate=0.01,
        batch_size=64,
        optimizer="adam"
    )
    
    print("初始配置:", config.to_dict())
    
    # 加载文件
    config.load_from_file("config.txt")
    print("加载文件后:", config.to_dict())
    
    # 获取配置
    print(f"learning_rate: {config.get('learning_rate')}")
    print(f"model.name: {config.get('model.name')}")
    print(f"batch_size: {config.get('batch_size')}")
    print(f"optimizer: {config.get('optimizer')}")
```



## 四、面试高频题
| 问题 | 参考答案 |
| --- | --- |
| Python中`is`和`==`的区别 | `==`比较值是否相等，`is`比较两个变量是否指向同一个对象（内存地址） |
| `isinstance(True, int)`返回什么？ | `True`，因为`bool`是`int`的子类 |
| `0.1 + 0.2 == 0.3`返回什么？ | `False`，浮点数精度问题，应用`Decimal`或`round()`比较 |
| Python中哪些类型不可变？ | `int`、`float`、`str`、`tuple`、`bool`、`None` |
| 列表和元组的区别？ | 列表可变、元组不可变；列表用`[]`，元组用`()` |
| `a = [1,2,3]`，`b = a`，修改`b[0]=99`，`a`会变吗？ | 会变，列表是可变对象，`b`和`a`指向同一对象 |
| Python中`None`如何判断？ | 用`is None`，不用`== None` |


## 五、学习验证清单
| 问题 | 自评 |
| --- | --- |
| 我能用一行代码交换两个变量 | ☐ |
| 我知道`is`和`==`的区别 | ☐ |
| 我知道小整数池的范围是`[-5, 256]` | ☐ |
| 我知道`isinstance(True, int)`返回`True` | ☐ |
| 我理解浮点数精度问题 | ☐ |
| 我能列出所有假值（至少6种） | ☐ |
| 我知道用`is None`判断空值 | ☐ |
| 我能进行字符串和字节的编码解码转换 | ☐ |
| 我知道Python中哪些类型可变/不可变 | ☐ |
| 我能使用`int()`、`float()`、`str()`进行类型转换 | ☐ |


