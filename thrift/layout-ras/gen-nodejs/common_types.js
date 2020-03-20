//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require("thrift").Thrift;

var ttypes = (module.exports = {});
LotacaoHeaderThrift = module.exports.LotacaoHeaderThrift = function(args) {
  this.profissionalCNS = null;
  this.cboCodigo_2002 = null;
  this.cnes = null;
  this.ine = null;
  if (args) {
    if (args.profissionalCNS !== undefined) {
      this.profissionalCNS = args.profissionalCNS;
    }
    if (args.cboCodigo_2002 !== undefined) {
      this.cboCodigo_2002 = args.cboCodigo_2002;
    }
    if (args.cnes !== undefined) {
      this.cnes = args.cnes;
    }
    if (args.ine !== undefined) {
      this.ine = args.ine;
    }
  }
};
LotacaoHeaderThrift.prototype = {};
LotacaoHeaderThrift.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.profissionalCNS = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.cboCodigo_2002 = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.STRING) {
          this.cnes = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.STRING) {
          this.ine = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LotacaoHeaderThrift.prototype.write = function(output) {
  output.writeStructBegin("LotacaoHeaderThrift");
  if (this.profissionalCNS !== null && this.profissionalCNS !== undefined) {
    output.writeFieldBegin("profissionalCNS", Thrift.Type.STRING, 1);
    output.writeString(this.profissionalCNS);
    output.writeFieldEnd();
  }
  if (this.cboCodigo_2002 !== null && this.cboCodigo_2002 !== undefined) {
    output.writeFieldBegin("cboCodigo_2002", Thrift.Type.STRING, 2);
    output.writeString(this.cboCodigo_2002);
    output.writeFieldEnd();
  }
  if (this.cnes !== null && this.cnes !== undefined) {
    output.writeFieldBegin("cnes", Thrift.Type.STRING, 3);
    output.writeString(this.cnes);
    output.writeFieldEnd();
  }
  if (this.ine !== null && this.ine !== undefined) {
    output.writeFieldBegin("ine", Thrift.Type.STRING, 4);
    output.writeString(this.ine);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UnicaLotacaoHeaderThrift = module.exports.UnicaLotacaoHeaderThrift = function(
  args
) {
  this.profissionalCNS = null;
  this.cboCodigo_2002 = null;
  this.cnes = null;
  this.ine = null;
  this.dataAtendimento = null;
  this.codigoIbgeMunicipio = null;
  if (args) {
    if (args.profissionalCNS !== undefined) {
      this.profissionalCNS = args.profissionalCNS;
    }
    if (args.cboCodigo_2002 !== undefined) {
      this.cboCodigo_2002 = args.cboCodigo_2002;
    }
    if (args.cnes !== undefined) {
      this.cnes = args.cnes;
    }
    if (args.ine !== undefined) {
      this.ine = args.ine;
    }
    if (args.dataAtendimento !== undefined) {
      this.dataAtendimento = args.dataAtendimento;
    }
    if (args.codigoIbgeMunicipio !== undefined) {
      this.codigoIbgeMunicipio = args.codigoIbgeMunicipio;
    }
  }
};
UnicaLotacaoHeaderThrift.prototype = {};
UnicaLotacaoHeaderThrift.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.profissionalCNS = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.cboCodigo_2002 = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.STRING) {
          this.cnes = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.STRING) {
          this.ine = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 5:
        if (ftype == Thrift.Type.I64) {
          this.dataAtendimento = input.readI64();
        } else {
          input.skip(ftype);
        }
        break;
      case 6:
        if (ftype == Thrift.Type.STRING) {
          this.codigoIbgeMunicipio = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UnicaLotacaoHeaderThrift.prototype.write = function(output) {
  output.writeStructBegin("UnicaLotacaoHeaderThrift");
  if (this.profissionalCNS !== null && this.profissionalCNS !== undefined) {
    output.writeFieldBegin("profissionalCNS", Thrift.Type.STRING, 1);
    output.writeString(this.profissionalCNS);
    output.writeFieldEnd();
  }
  if (this.cboCodigo_2002 !== null && this.cboCodigo_2002 !== undefined) {
    output.writeFieldBegin("cboCodigo_2002", Thrift.Type.STRING, 2);
    output.writeString(this.cboCodigo_2002);
    output.writeFieldEnd();
  }
  if (this.cnes !== null && this.cnes !== undefined) {
    output.writeFieldBegin("cnes", Thrift.Type.STRING, 3);
    output.writeString(this.cnes);
    output.writeFieldEnd();
  }
  if (this.ine !== null && this.ine !== undefined) {
    output.writeFieldBegin("ine", Thrift.Type.STRING, 4);
    output.writeString(this.ine);
    output.writeFieldEnd();
  }
  if (this.dataAtendimento !== null && this.dataAtendimento !== undefined) {
    output.writeFieldBegin("dataAtendimento", Thrift.Type.I64, 5);
    output.writeI64(this.dataAtendimento);
    output.writeFieldEnd();
  }
  if (
    this.codigoIbgeMunicipio !== null &&
    this.codigoIbgeMunicipio !== undefined
  ) {
    output.writeFieldBegin("codigoIbgeMunicipio", Thrift.Type.STRING, 6);
    output.writeString(this.codigoIbgeMunicipio);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

VariasLotacoesHeaderThrift = module.exports.VariasLotacoesHeaderThrift = function(
  args
) {
  this.lotacaoFormPrincipal = null;
  this.lotacaoFormAtendimentoCompartilhado = null;
  this.dataAtendimento = null;
  this.codigoIbgeMunicipio = null;
  if (args) {
    if (args.lotacaoFormPrincipal !== undefined) {
      this.lotacaoFormPrincipal = args.lotacaoFormPrincipal;
    }
    if (args.lotacaoFormAtendimentoCompartilhado !== undefined) {
      this.lotacaoFormAtendimentoCompartilhado =
        args.lotacaoFormAtendimentoCompartilhado;
    }
    if (args.dataAtendimento !== undefined) {
      this.dataAtendimento = args.dataAtendimento;
    }
    if (args.codigoIbgeMunicipio !== undefined) {
      this.codigoIbgeMunicipio = args.codigoIbgeMunicipio;
    }
  }
};
VariasLotacoesHeaderThrift.prototype = {};
VariasLotacoesHeaderThrift.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 6:
        if (ftype == Thrift.Type.STRUCT) {
          this.lotacaoFormPrincipal = new ttypes.LotacaoHeaderThrift();
          this.lotacaoFormPrincipal.read(input);
        } else {
          input.skip(ftype);
        }
        break;
      case 7:
        if (ftype == Thrift.Type.STRUCT) {
          this.lotacaoFormAtendimentoCompartilhado = new ttypes.LotacaoHeaderThrift();
          this.lotacaoFormAtendimentoCompartilhado.read(input);
        } else {
          input.skip(ftype);
        }
        break;
      case 8:
        if (ftype == Thrift.Type.I64) {
          this.dataAtendimento = input.readI64();
        } else {
          input.skip(ftype);
        }
        break;
      case 9:
        if (ftype == Thrift.Type.STRING) {
          this.codigoIbgeMunicipio = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

VariasLotacoesHeaderThrift.prototype.write = function(output) {
  output.writeStructBegin("VariasLotacoesHeaderThrift");
  if (
    this.lotacaoFormPrincipal !== null &&
    this.lotacaoFormPrincipal !== undefined
  ) {
    output.writeFieldBegin("lotacaoFormPrincipal", Thrift.Type.STRUCT, 6);
    this.lotacaoFormPrincipal.write(output);
    output.writeFieldEnd();
  }
  if (
    this.lotacaoFormAtendimentoCompartilhado !== null &&
    this.lotacaoFormAtendimentoCompartilhado !== undefined
  ) {
    output.writeFieldBegin(
      "lotacaoFormAtendimentoCompartilhado",
      Thrift.Type.STRUCT,
      7
    );
    this.lotacaoFormAtendimentoCompartilhado.write(output);
    output.writeFieldEnd();
  }
  if (this.dataAtendimento !== null && this.dataAtendimento !== undefined) {
    output.writeFieldBegin("dataAtendimento", Thrift.Type.I64, 8);
    output.writeI64(this.dataAtendimento);
    output.writeFieldEnd();
  }
  if (
    this.codigoIbgeMunicipio !== null &&
    this.codigoIbgeMunicipio !== undefined
  ) {
    output.writeFieldBegin("codigoIbgeMunicipio", Thrift.Type.STRING, 9);
    output.writeString(this.codigoIbgeMunicipio);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

EnderecoLocalPermanenciaThrift = module.exports.EnderecoLocalPermanenciaThrift = function(
  args
) {
  this.bairro = null;
  this.cep = null;
  this.codigoIbgeMunicipio = null;
  this.complemento = null;
  this.nomeLogradouro = null;
  this.numero = null;
  this.numeroDneUf = null;
  this.telefoneContato = null;
  this.telefoneResidencia = null;
  this.tipoLogradouroNumeroDne = null;
  this.stSemNumero = null;
  this.pontoReferencia = null;
  this.microArea = null;
  this.stForaArea = null;
  if (args) {
    if (args.bairro !== undefined) {
      this.bairro = args.bairro;
    }
    if (args.cep !== undefined) {
      this.cep = args.cep;
    }
    if (args.codigoIbgeMunicipio !== undefined) {
      this.codigoIbgeMunicipio = args.codigoIbgeMunicipio;
    }
    if (args.complemento !== undefined) {
      this.complemento = args.complemento;
    }
    if (args.nomeLogradouro !== undefined) {
      this.nomeLogradouro = args.nomeLogradouro;
    }
    if (args.numero !== undefined) {
      this.numero = args.numero;
    }
    if (args.numeroDneUf !== undefined) {
      this.numeroDneUf = args.numeroDneUf;
    }
    if (args.telefoneContato !== undefined) {
      this.telefoneContato = args.telefoneContato;
    }
    if (args.telefoneResidencia !== undefined) {
      this.telefoneResidencia = args.telefoneResidencia;
    }
    if (args.tipoLogradouroNumeroDne !== undefined) {
      this.tipoLogradouroNumeroDne = args.tipoLogradouroNumeroDne;
    }
    if (args.stSemNumero !== undefined) {
      this.stSemNumero = args.stSemNumero;
    }
    if (args.pontoReferencia !== undefined) {
      this.pontoReferencia = args.pontoReferencia;
    }
    if (args.microArea !== undefined) {
      this.microArea = args.microArea;
    }
    if (args.stForaArea !== undefined) {
      this.stForaArea = args.stForaArea;
    }
  }
};
EnderecoLocalPermanenciaThrift.prototype = {};
EnderecoLocalPermanenciaThrift.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.bairro = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.cep = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.STRING) {
          this.codigoIbgeMunicipio = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.STRING) {
          this.complemento = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 5:
        if (ftype == Thrift.Type.STRING) {
          this.nomeLogradouro = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 6:
        if (ftype == Thrift.Type.STRING) {
          this.numero = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 7:
        if (ftype == Thrift.Type.STRING) {
          this.numeroDneUf = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 8:
        if (ftype == Thrift.Type.STRING) {
          this.telefoneContato = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 9:
        if (ftype == Thrift.Type.STRING) {
          this.telefoneResidencia = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 10:
        if (ftype == Thrift.Type.STRING) {
          this.tipoLogradouroNumeroDne = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 11:
        if (ftype == Thrift.Type.BOOL) {
          this.stSemNumero = input.readBool();
        } else {
          input.skip(ftype);
        }
        break;
      case 12:
        if (ftype == Thrift.Type.STRING) {
          this.pontoReferencia = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 13:
        if (ftype == Thrift.Type.STRING) {
          this.microArea = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 14:
        if (ftype == Thrift.Type.BOOL) {
          this.stForaArea = input.readBool();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EnderecoLocalPermanenciaThrift.prototype.write = function(output) {
  output.writeStructBegin("EnderecoLocalPermanenciaThrift");
  if (this.bairro !== null && this.bairro !== undefined) {
    output.writeFieldBegin("bairro", Thrift.Type.STRING, 1);
    output.writeString(this.bairro);
    output.writeFieldEnd();
  }
  if (this.cep !== null && this.cep !== undefined) {
    output.writeFieldBegin("cep", Thrift.Type.STRING, 2);
    output.writeString(this.cep);
    output.writeFieldEnd();
  }
  if (
    this.codigoIbgeMunicipio !== null &&
    this.codigoIbgeMunicipio !== undefined
  ) {
    output.writeFieldBegin("codigoIbgeMunicipio", Thrift.Type.STRING, 3);
    output.writeString(this.codigoIbgeMunicipio);
    output.writeFieldEnd();
  }
  if (this.complemento !== null && this.complemento !== undefined) {
    output.writeFieldBegin("complemento", Thrift.Type.STRING, 4);
    output.writeString(this.complemento);
    output.writeFieldEnd();
  }
  if (this.nomeLogradouro !== null && this.nomeLogradouro !== undefined) {
    output.writeFieldBegin("nomeLogradouro", Thrift.Type.STRING, 5);
    output.writeString(this.nomeLogradouro);
    output.writeFieldEnd();
  }
  if (this.numero !== null && this.numero !== undefined) {
    output.writeFieldBegin("numero", Thrift.Type.STRING, 6);
    output.writeString(this.numero);
    output.writeFieldEnd();
  }
  if (this.numeroDneUf !== null && this.numeroDneUf !== undefined) {
    output.writeFieldBegin("numeroDneUf", Thrift.Type.STRING, 7);
    output.writeString(this.numeroDneUf);
    output.writeFieldEnd();
  }
  if (this.telefoneContato !== null && this.telefoneContato !== undefined) {
    output.writeFieldBegin("telefoneContato", Thrift.Type.STRING, 8);
    output.writeString(this.telefoneContato);
    output.writeFieldEnd();
  }
  if (
    this.telefoneResidencia !== null &&
    this.telefoneResidencia !== undefined
  ) {
    output.writeFieldBegin("telefoneResidencia", Thrift.Type.STRING, 9);
    output.writeString(this.telefoneResidencia);
    output.writeFieldEnd();
  }
  if (
    this.tipoLogradouroNumeroDne !== null &&
    this.tipoLogradouroNumeroDne !== undefined
  ) {
    output.writeFieldBegin("tipoLogradouroNumeroDne", Thrift.Type.STRING, 10);
    output.writeString(this.tipoLogradouroNumeroDne);
    output.writeFieldEnd();
  }
  if (this.stSemNumero !== null && this.stSemNumero !== undefined) {
    output.writeFieldBegin("stSemNumero", Thrift.Type.BOOL, 11);
    output.writeBool(this.stSemNumero);
    output.writeFieldEnd();
  }
  if (this.pontoReferencia !== null && this.pontoReferencia !== undefined) {
    output.writeFieldBegin("pontoReferencia", Thrift.Type.STRING, 12);
    output.writeString(this.pontoReferencia);
    output.writeFieldEnd();
  }
  if (this.microArea !== null && this.microArea !== undefined) {
    output.writeFieldBegin("microArea", Thrift.Type.STRING, 13);
    output.writeString(this.microArea);
    output.writeFieldEnd();
  }
  if (this.stForaArea !== null && this.stForaArea !== undefined) {
    output.writeFieldBegin("stForaArea", Thrift.Type.BOOL, 14);
    output.writeBool(this.stForaArea);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
