import { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const fotos = [
  { imagem: 'https://picsum.photos/id/1018/900/600', titulo: 'Paisagens', descricao: 'Uma das minhas paisagens favoritas.' },
  { imagem: 'https://picsum.photos/id/1015/900/600', titulo: 'Montanhas', descricao: 'Um lugar bonito para conhecer e guardar na memória.' },
  { imagem: 'https://picsum.photos/id/1016/900/600', titulo: 'Floresta', descricao: 'A natureza deixa cada viagem especial.' },
  { imagem: 'https://picsum.photos/id/1019/900/600', titulo: 'Caminhos', descricao: 'Novos caminhos e novas descobertas.' },
  { imagem: 'https://picsum.photos/id/1039/900/600', titulo: 'Perto do mar', descricao: 'Uma vista tranquila para aproveitar o momento.' },
  { imagem: 'https://picsum.photos/id/1043/900/600', titulo: 'Natureza', descricao: 'Mais uma das minhas paisagens favoritas.' },
];

export default function App() {
  const [fotoAtual, setFotoAtual] = useState(0);

  function mostrarFoto(indice) {
    setFotoAtual(indice);
  }

  function voltarFoto() {
    if (fotoAtual > 0) setFotoAtual(fotoAtual - 1);
  }

  function avancarFoto() {
    if (fotoAtual < fotos.length - 1) setFotoAtual(fotoAtual + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.album}>
        <Text style={styles.tituloApp}>Meu Álbum</Text>
        <Text style={styles.subtitulo}>Minhas melhores viagens</Text>

        <Foto imagem={fotos[fotoAtual].imagem} titulo={fotos[fotoAtual].titulo} descricao={fotos[fotoAtual].descricao} />

        <View style={styles.navegacao}>
          <Pressable style={[styles.botaoNavegacao, fotoAtual === 0 && styles.botaoDesativado]} onPress={voltarFoto} disabled={fotoAtual === 0}>
            <Text style={styles.textoNavegacao}>Anterior</Text>
          </Pressable>
          <Text style={styles.contador}>{fotoAtual + 1} / {fotos.length}</Text>
          <Pressable style={[styles.botaoNavegacao, fotoAtual === fotos.length - 1 && styles.botaoDesativado]} onPress={avancarFoto} disabled={fotoAtual === fotos.length - 1}>
            <Text style={styles.textoNavegacao}>Próxima</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.miniaturas}>
          {fotos.map((item, indice) => (
            <Pressable key={item.titulo} onPress={() => mostrarFoto(indice)} style={[styles.miniaturaBorda, fotoAtual === indice && styles.miniaturaSelecionada]}>
              <Image source={{ uri: item.imagem }} style={styles.miniatura} />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function Foto(props) {
  const { imagem, titulo, descricao } = props;

  return (
    <View style={styles.fotoContainer}>
      <Image source={{ uri: imagem }} style={styles.foto} />
      <Text style={styles.tituloFoto}>{titulo}</Text>
      <Text style={styles.descricaoFoto}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  album: {
    width: '100%',
    maxWidth: 360,
    borderWidth: 1,
    borderColor: '#252525',
    borderRadius: 14,
    padding: 12,
  },
  tituloApp: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    color: '#cccccc',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  fotoContainer: {
    width: '100%',
  },
  foto: {
    width: '100%',
    height: 243,
    borderRadius: 10,
    backgroundColor: '#222222',
  },
  tituloFoto: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descricaoFoto: {
    color: '#cccccc',
    fontSize: 14,
    marginTop: 8,
  },
  navegacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 6,
  },
  botaoNavegacao: {
    flex: 1,
    backgroundColor: '#171719',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  botaoDesativado: {
    opacity: 0.55,
  },
  textoNavegacao: {
    color: '#ffffff',
    fontSize: 15,
  },
  contador: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  miniaturas: {
    paddingTop: 9,
    paddingBottom: 2,
    gap: 6,
  },
  miniaturaBorda: {
    padding: 2,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 9,
  },
  miniaturaSelecionada: {
    borderColor: '#eeeeee',
  },
  miniatura: {
    width: 98,
    height: 100,
    borderRadius: 6,
    backgroundColor: '#222222',
  },
});
