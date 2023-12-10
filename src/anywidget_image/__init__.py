import importlib.metadata
import pathlib

import anywidget

try:
    __version__ = importlib.metadata.version("anywidget_image")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"

from traitlets import Unicode, Int , Bool

class ImageWidget(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget.js"
    _css = pathlib.Path(__file__).parent / "static" / "widget.css"
    value = Unicode("").tag(sync=True)
    width =  Int(100).tag(sync=True)


class ImageWidgetConvert(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget_convert.js"
    _css = pathlib.Path(__file__).parent / "static" / "widget_convert.css"
    value = Unicode("").tag(sync=True)
    width =  Int(100).tag(sync=True)
    embed_image = Bool(False).tag(sync=True)

